import kaliConventions from "@socialgouv/kali-data/data/index.json";

const pre = "<b><u>";
const post = "</u></b>";

const defaultLimit = 20;

const conventionsSet = Object.fromEntries(
  kaliConventions.map((c) => {
    const { num, etat, id, mtime, texte_de_base, url, title, shortTitle } = c;
    return [num, { etat, id, mtime, texte_de_base, title, url, shortTitle }];
  })
);

// we remove duplicated tokens to compose company's label
const formatLabel = (naming: string[]) => {
  const labelTokens = naming
    .join(" ")
    .split(" ")
    .map((n) => ({
      fmt: n,
      raw: n.replace(pre, "").replace(post, "").trim().toUpperCase(),
    }))
    .reduce(
      (acc, curr) => {
        if (!acc.map(({ raw }) => raw).includes(curr.raw)) {
          acc.push(curr);
        }
        return acc;
      },
      [] as {
        fmt: string;
        raw: string;
      }[]
    );

  return labelTokens.map(({ fmt }) => fmt).join(" ");
};

export const mapHit = ({
  _source: {
    siren,
    denominationUniteLegale,
    dateCreationUniteLegale,
    nomUniteLegale,
    nomUsageUniteLegale,
    denominationUsuelle1UniteLegale,
    denominationUsuelle2UniteLegale,
    denominationUsuelle3UniteLegale,
    etatAdministratifEtablissement,
    codeCommuneEtablissement,
    categorieEntreprise,
    etatAdministratifUniteLegale,
    caractereEmployeurUniteLegale,
    activitePrincipale,
    etablissements,
    siret,
    geo_adresse,
    naming,
    idccs,
    is_siege,
  },
  inner_hits,
  highlight,
}: any) => {
  const label = formatLabel(naming.split(" "));

  const highlightLabel =
    highlight && highlight.naming ? formatLabel(highlight.naming) : label;

  const matching = inner_hits.matchingEtablissements.hits.total.value;

  const conventions = inner_hits.matchingEtablissements.hits.hits
    .filter((h: any) => h.fields)
    .reduce(
      (
        acc: any,
        {
          fields: { convention, idccs },
        }: { fields: { convention: string[]; idccs: string[] } }
      ) => {
        idccs?.forEach((idcc) => {
          const idccNum = parseInt(idcc);
          // ignore idcc 0 and 9999 : unkown ccs
          if (idccNum && idccNum > 0 && idccNum < 9999) {
            const kaliData = conventionsSet[idccNum];
            const o = {
              idcc: idccNum,
              // shortTitle: convention ? convention[0] : "",
              ...kaliData,
            };
            if (!acc.has(o.idcc)) {
              acc.set(o.idcc, o);
            }
          }
        });

        return acc;
      },
      new Map()
    );

  const allMatchingEtablissements = inner_hits.matchingEtablissements.hits.hits
    .filter((h: any) => h.fields)
    .map(
      ({
        fields: { "geo_adresse.keyword": address, siret, idccs, is_siege },
      }: any) => ({
        address: address[0],
        siret: siret[0],
        idccs,
        is_siege: is_siege[0],
      })
    );

  // take first by priority
  const simpleLabel = [
    denominationUniteLegale,
    denominationUsuelle1UniteLegale,
    denominationUsuelle2UniteLegale,
    denominationUsuelle3UniteLegale,
    nomUniteLegale,
    nomUsageUniteLegale,
  ].find((l) => l);

  return {
    activitePrincipale,
    dateCreationUniteLegale,
    caractereEmployeurUniteLegale,
    conventions: Array.from(conventions.values()),
    etablissements: parseInt(etablissements),
    etatAdministratifUniteLegale,
    highlightLabel,
    label,
    matching,
    firstMatchingEtablissement: {
      address: geo_adresse,
      codeCommuneEtablissement,
      idccs,
      categorieEntreprise,
      siret,
      etatAdministratifEtablissement,
      is_siege,
    },
    allMatchingEtablissements,
    simpleLabel,
    siren,
  };
};

// rank by "effectif"
const rank_feature = { boost: 10, field: "trancheEffectifsUniteLegale" };

const collapse = (withAllConventions: boolean) => ({
  field: "siren",
  inner_hits: {
    _source: false,
    docvalue_fields: ["siret", "geo_adresse.keyword", "idccs", "is_siege"],
    name: "matchingEtablissements",
    size: withAllConventions ? 10000 : 1,
  },
});

const addressFilter = (address: string) => {
  // check if address filter is code postal or commune
  const cp = parseInt(address);

  return cp
    ? {
        prefix: {
          codePostalEtablissement: cp.toString(),
        },
      }
    : {
        match: {
          libelleCommuneEtablissement: {
            query: address,
          },
        },
      };
};

export type SearchArgs = {
  query: string;
  address?: string | undefined;
  // return convention of every etablissements associated to the main company
  addAllConventions?: boolean;
  // only search for etablissements with convention attached
  convention: boolean;
  limit?: number | undefined;
  // etablissement still open
  open: boolean;
  // etablissement employeur
  employer: boolean;
  // rank by effectif ?
  ranked: boolean;
};

const onlyConventionFilter = { term: { withIdcc: true } };

const openFilters = [
  { term: { etatAdministratifUniteLegale: "A" } },
  { term: { etatAdministratifEtablissement: "A" } },
];

const employerFilter = {
  term: {
    caractereEmployeurUniteLegale: "O",
  },
};

const makeFilters = (
  convention: boolean,
  open: boolean,
  employer: boolean,
  address: string | undefined
) => {
  const filters = [];

  if (convention) {
    filters.push(onlyConventionFilter);
  }

  if (open) {
    filters.push(...openFilters);
  }

  if (employer) {
    filters.push(employerFilter);
  }

  if (address) {
    filters.push(addressFilter(address));
  }

  return filters;
};

export const entrepriseSearchBody = ({
  query,
  address,
  addAllConventions = true,
  convention,
  limit = defaultLimit,
  open,
  employer,
  ranked,
}: SearchArgs) => ({
  collapse: collapse(addAllConventions),
  highlight: {
    fields: {
      naming: { post_tags: [post], pre_tags: [pre] },
    },
  },
  query: {
    bool: {
      filter: makeFilters(convention, open, employer, address),
      must: [
        {
          bool: {
            should: [
              { fuzzy: { naming: { boost: 0.6, value: query } } },
              { match: { naming: query } },
              { match: { siret: query.replace(/\D/g, "") } },
              { match: { siren: query.replace(/\D/g, "") } },
            ],
          },
        },
      ],
      should: [
        ranked ? { rank_feature } : undefined,
        // rank by siret with minimum boosting in order to ensure results appear in the same order
        // useful to always have the same first etablissement when no address passed
        { rank_feature: { boost: 0.1, field: "siretRank" } },
      ],
    },
  },
  size: limit ? limit : defaultLimit,
});
