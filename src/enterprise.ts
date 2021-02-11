export type Enterprise = {
  siren: number;
  trancheEffectifsUniteLegale: number;

  // categorieEntreprise: 'PME',
  nomUniteLegale: string;
  nomUsageUniteLegale: string;

  denominationUniteLegale: string;
  denominationUsuelle1UniteLegale: string;
  denominationUsuelle2UniteLegale: string;
  denominationUsuelle3UniteLegale: string;

  enseigne1Etablissement: string;
  enseigne2Etablissement: string;
  enseigne3Etablissement: string;
  denominationUsuelleEtablissement: string;

  // categorieJuridiqueUniteLegale: '5599',
  // activitePrincipaleUniteLegale: string;

  // nomenclatureActivitePrincipaleUniteLegale: 'NAFRev2',
  siret: number;
  codePostalEtablissement: string;
  libelleCommuneEtablissement: string;

  // etatAdministratifEtablissement: 'A',
  // MOIS: '2020-07',

  idcc: number;
  geo_adresse: string;

  // DATE_MAJ: '2020/08/28'
};

export const mappings = {
  properties: {
    trancheEffectifsUniteLegale: { type: "rank_feature" },

    siret: { type: "keyword" },
    siren: { type: "keyword" },
    codePostalEtablissement: { type: "keyword" },
    libelleCommuneEtablissement: { type: "keyword" },

    nomUniteLegale: { type: "keyword" },
    nomUsageUniteLegale: { type: "keyword" },

    denominationUniteLegale: { type: "keyword" },
    denominationUsuelle1UniteLegale: { type: "keyword" },
    denominationUsuelle2UniteLegale: { type: "keyword" },
    denominationUsuelle3UniteLegale: { type: "keyword" },

    enseigne1Etablissement: { type: "keyword" },
    enseigne2Etablissement: { type: "keyword" },
    enseigne3Etablissement: { type: "keyword" },
    denominationUsuelleEtablissement: { type: "keyword" },

    idcc: { type: "keyword" },

    cp: { type: "keyword" },

    ville: {
      analyzer: "french_indexing",
      search_analyzer: "french",
      type: "text",
    },

    address: {
      analyzer: "french_indexing",
      search_analyzer: "french",
      type: "text",
    },

    naming: {
      analyzer: "french_indexing",
      search_analyzer: "french",
      type: "text",
      similarity: "bm25_no_norm_length",
    },
  },
};

export const mapEnterprise = (enterprise: Enterprise) => {
  // ranking feature cannot be 0
  if (
    !Number.parseFloat(
      (enterprise.trancheEffectifsUniteLegale as unknown) as string
    )
  )
    enterprise.trancheEffectifsUniteLegale = 0.1;

  const naming = Array.from(
    new Set([
      enterprise.nomUniteLegale,
      enterprise.nomUsageUniteLegale,
      enterprise.denominationUniteLegale,
      enterprise.denominationUsuelle1UniteLegale,
      enterprise.denominationUsuelle2UniteLegale,
      enterprise.denominationUsuelle3UniteLegale,

      enterprise.enseigne1Etablissement,
      enterprise.enseigne2Etablissement,
      enterprise.enseigne3Etablissement,
      enterprise.denominationUsuelleEtablissement,

      enterprise.codePostalEtablissement,
    ])
  )
    .filter((t) => t)
    .join(" ");

  return {
    address: enterprise.geo_adresse,
    cp: enterprise.codePostalEtablissement,
    ville: enterprise.libelleCommuneEtablissement,
    naming,
    ...Object.fromEntries(
      Object.entries(enterprise).filter(([k, v]) => k && v)
    ),
  };
};
