import kaliConventions from "@socialgouv/kali-data/data/index.json";

const pre = "<b><u>";
const post = "</b></u>";

const defaultLimit = 20;

// we remove deduplicate tokens to compose company's label
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
    nomUniteLegale,
    nomUsageUniteLegale,
    denominationUsuelle1UniteLegale,
    denominationUsuelle2UniteLegale,
    denominationUsuelle3UniteLegale,
    activitePrincipale,
    etablissements,
    siret,
    address,
    naming,
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
          fields: { convention, idcc },
        }: { fields: { convention: string[]; idcc: string } }
      ) => {
        const kaliConvention = kaliConventions.find(cv => cv.num === parseInt(idcc)) || {}
        const o = {
          idcc: parseInt(idcc),
          shortTitle: convention ? convention[0] : "",
          ...kaliConvention
        };
        if (!acc.has(o.idcc)) {
          acc.set(o.idcc, o);
        }
        return acc;
      },
      new Map()
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
    conventions: Array.from(conventions.values()),
    etablissements: parseInt(etablissements),
    highlightLabel,
    label,
    matching,
    simpleLabel,
    siren,
    matchingEtablissement: {
      siret,
      address,
    },
  };
};

const rank_feature = { boost: 10, field: "trancheEffectifsUniteLegale" };

const collapse = (withAllConventions: boolean) => ({
  field: "siren",
  inner_hits: {
    _source: false,
    docvalue_fields: ["idcc", "convention"],
    name: "matchingEtablissements",
    size: withAllConventions ? 10000 : 1,
  },
});

const addressFilter = (address: string | undefined) =>
  address
    ? [
        {
          match: {
            cp: {
              query: address ? address.replace(/\D/g, "") : "",
            },
          },
        },
        {
          match: {
            ville: {
              query: address,
            },
          },
        },
      ]
    : [{ match_all: {} }];

export const entrepriseSearchBody = (
  query: string,
  address: string | undefined,
  // return convention of every etablissements associated to the main company
  addAllConventions: boolean,
  // only search for etablissements with convention attached
  onlyWithConvention: boolean,
  size: number | undefined = defaultLimit
) => ({
  collapse: collapse(addAllConventions),
  highlight: {
    fields: {
      naming: { post_tags: [post], pre_tags: [pre] },
    },
  },
  query: {
    bool: {
      filter: onlyWithConvention
        ? [{ term: { withIdcc: onlyWithConvention } }]
        : undefined,
      must: [
        {
          bool: {
            should: addressFilter(address),
          },
        },
        {
          bool: {
            should: [
              { fuzzy: { naming: { boost: 0.6, value: query } } },
              { match: { naming: query } },
              { match: { siret: query } },
              { match: { siren: query } },
            ],
          },
        },
      ],
      should: [{ rank_feature }],
    },
  },
  size: size ? size : defaultLimit,
});
