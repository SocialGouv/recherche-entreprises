import { codesNaf } from "./naf";

export type Enterprise = {
  siren: number;
  trancheEffectifsUniteLegale: number;

  // categorieEntreprise: 'PME',
  nomUniteLegale: string;
  nomUsageUniteLegale: string;
  sigleUniteLegale: string;

  denominationUniteLegale: string;
  denominationUsuelle1UniteLegale: string;
  denominationUsuelle2UniteLegale: string;
  denominationUsuelle3UniteLegale: string;

  enseigne1Etablissement: string;
  enseigne2Etablissement: string;
  enseigne3Etablissement: string;
  denominationUsuelleEtablissement: string;

  // categorieJuridiqueUniteLegale: '5599',
  activitePrincipaleUniteLegale: string;
  activitePrincipaleEtablissement: string;

  // nomenclatureActivitePrincipaleUniteLegale: 'NAFRev2',
  siret: number;
  codePostalEtablissement: string;
  libelleCommuneEtablissement: string;

  // etatAdministratifEtablissement: 'A',
  // MOIS: '2020-07',

  idcc: number | undefined;
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
    sigleUniteLegale: { type: "keyword" },

    denominationUniteLegale: { type: "keyword" },
    denominationUsuelle1UniteLegale: { type: "keyword" },
    denominationUsuelle2UniteLegale: { type: "keyword" },
    denominationUsuelle3UniteLegale: { type: "keyword" },

    enseigne1Etablissement: { type: "keyword" },
    enseigne2Etablissement: { type: "keyword" },
    enseigne3Etablissement: { type: "keyword" },
    denominationUsuelleEtablissement: { type: "keyword" },

    withIdcc: { type: "boolean" },
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

    activitePrincipale: { type: "keyword" },
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
      enterprise.sigleUniteLegale,

      enterprise.denominationUniteLegale,
      enterprise.denominationUsuelle1UniteLegale,
      enterprise.denominationUsuelle2UniteLegale,
      enterprise.denominationUsuelle3UniteLegale,

      enterprise.enseigne1Etablissement,
      enterprise.enseigne2Etablissement,
      enterprise.enseigne3Etablissement,
      enterprise.denominationUsuelleEtablissement,
    ])
  )
    .filter((t) => t)
    .join(" ");

  const codeActivitePrincipale = [
    enterprise.activitePrincipaleEtablissement,
    enterprise.activitePrincipaleUniteLegale,
  ]
    .map((c) => c.replace(".", ""))
    .find((s) => s);

  const activitePrincipale =
    codeActivitePrincipale !== undefined
      ? codesNaf.get(codeActivitePrincipale)
      : undefined;

  return {
    address: enterprise.geo_adresse,
    cp: enterprise.codePostalEtablissement || undefined,
    ville: enterprise.libelleCommuneEtablissement,
    naming,
    activitePrincipale,
    withIdcc:
      enterprise.idcc !== undefined &&
      enterprise.idcc !== null &&
      enterprise.idcc != 0,
    ...Object.fromEntries(
      Object.entries(enterprise).filter(([k, v]) => k && v)
    ),
  };
};
