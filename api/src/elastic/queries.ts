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

export const mapHit =
  (matchingLimit: number) =>
  ({
    _source: {
      siren,
      categorieJuridiqueUniteLegale,
      dateCreationUniteLegale,
      etatAdministratifEtablissement,
      codeCommuneEtablissement,
      categorieEntreprise,
      etatAdministratifUniteLegale,
      dateDebut,
      caractereEmployeurUniteLegale,
      activitePrincipale,
      etablissements,
      siret,
      geo_adresse,
      naming,
      namingMain,
      idccs,
      etablissementSiege,
      activitePrincipaleEtablissement,
      activitePrincipaleUniteLegale,
      codePostalEtablissement,
      libelleCommuneEtablissement,
      codePaysEtrangerEtablissement,
    },
    inner_hits,
    highlight,
  }: any) => {
    const label = formatLabel(naming.split(" "));

    const simpleLabel = namingMain;

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

    const getFirstIfSet = (a?: string[]): string | undefined =>
      a && a[0] != undefined ? a[0] : undefined;

    const allMatchingEtablissements =
      inner_hits.matchingEtablissements.hits.hits
        .filter((h: any) => h.fields)
        .slice(0, matchingLimit)
        .map(
          ({
            fields: {
              "geo_adresse.keyword": address,
              siret,
              idccs,
              activitePrincipaleEtablissement,
              codeCommuneEtablissement,
              etablissementSiege,
            },
          }: any) => ({
            address: address && address[0],
            siret: siret && siret[0],
            idccs,
            activitePrincipaleEtablissement: getFirstIfSet(
              activitePrincipaleEtablissement
            ),
            etablissementSiege: getFirstIfSet(etablissementSiege), //|| false,
            codeCommuneEtablissement: getFirstIfSet(codeCommuneEtablissement),
            codePostalEtablissement,
            libelleCommuneEtablissement,
            codePaysEtrangerEtablissement,
          })
        );

    return {
      activitePrincipale,
      activitePrincipaleUniteLegale,
      categorieJuridiqueUniteLegale,
      dateCreationUniteLegale,
      dateDebut,
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
        codePostalEtablissement,
        libelleCommuneEtablissement,
        codePaysEtrangerEtablissement,
        idccs,
        categorieEntreprise,
        siret,
        etatAdministratifEtablissement,
        etablissementSiege,
        activitePrincipaleEtablissement,
      },
      allMatchingEtablissements,
      simpleLabel,
      siren,
    };
  };

// rank by number of etablisseements
const etablissementsRankFeature = { boost: 4, field: "etablissements" };

const collapse = (withAllConventions: boolean) => ({
  field: "siren",
  inner_hits: {
    _source: false,
    docvalue_fields: [
      "siret",
      "geo_adresse.keyword",
      "idccs",
      "etablissementSiege",
      "activitePrincipaleEtablissement",
      "codeCommuneEtablissement",
    ],
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
  // limit matching etablissements to reduce response size
  matchingLimit: number;
  // boost etablissement siege
  boostSiege?: boolean;
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

const onlyDigits = (query: string) =>
  query.replace(/\s/g, "").match(/^[0-9]+$/) != null;

export const entrepriseSearchBody = ({
  query,
  address,
  addAllConventions = true,
  convention,
  limit = defaultLimit,
  open,
  employer,
  ranked,
  boostSiege,
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
              { term: { siren: query.replace(/\D/g, "") } },
              { term: { siret: query.replace(/\D/g, "") } },
              !onlyDigits(query)
                ? {
                    multi_match: {
                      query,
                      type: "most_fields",
                      fields: ["naming", "namingMain"],
                      fuzziness: "AUTO",
                    },
                  }
                : undefined,
            ].filter((s) => s),
          },
        },
      ],
      should: [
        boostSiege ? { term: { etablissementSiege: true } } : undefined,
        ranked ? { rank_feature: etablissementsRankFeature } : undefined,
        // rank by siret with minimum boosting in order to ensure results appear in the same order
        // useful to always have the same first etablissement when no address passed
        { rank_feature: { boost: 0.1, field: "siretRank" } },
      ].filter((s) => s),
    },
  },
  size: limit ? limit : defaultLimit,
});
