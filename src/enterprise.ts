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
  // categorieJuridiqueUniteLegale: '5599',
  activitePrincipaleUniteLegale: string;
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
    idcc: { type: "keyword" },

    villeCp: {
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

  return {
    address: enterprise.geo_adresse,
    villeCp: [
      enterprise.codePostalEtablissement,
      enterprise.libelleCommuneEtablissement,
    ]
      .filter((t) => t)
      .join(" "),
    naming: [
      enterprise.nomUniteLegale,
      enterprise.nomUsageUniteLegale,
      enterprise.denominationUniteLegale,
      enterprise.denominationUsuelle1UniteLegale,
      enterprise.denominationUsuelle2UniteLegale,
      enterprise.denominationUsuelle3UniteLegale,
    ]
      .filter((t) => t)
      .join(" "),
    ...Object.fromEntries(
      Object.entries(enterprise).filter(([k, v]) => k && v)
    ),
  };
};
