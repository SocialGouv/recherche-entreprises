import agreements from "@socialgouv/kali-data/data/index.json";

import { codesNaf } from "./naf";

const ccMap = new Map(agreements.map((agg) => [agg.num, agg]));

export type Enterprise = {
  siren: string;
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

  etablissements: number;

  // categorieJuridiqueUniteLegale: '5599',
  activitePrincipaleUniteLegale: string;
  activitePrincipaleEtablissement: string;

  // nomenclatureActivitePrincipaleUniteLegale: 'NAFRev2',
  siret: string;
  codePostalEtablissement: string;
  libelleCommuneEtablissement: string;

  // etatAdministratifEtablissement: 'A',
  // MOIS: '2020-07',

  idcc: string | undefined;
  geo_adresse: string;

  // DATE_MAJ: '2020/08/28'
};

export const mappings = {
  properties: {
    activitePrincipale: { type: "keyword" },
    address: {
      analyzer: "french_indexing",
      type: "text",
    },
    codePostalEtablissement: { type: "keyword" },

    convention: { type: "keyword" },
    cp: { type: "keyword" },
    denominationUniteLegale: { type: "keyword" },
    denominationUsuelle1UniteLegale: { type: "keyword" },

    denominationUsuelle2UniteLegale: { type: "keyword" },
    denominationUsuelle3UniteLegale: { type: "keyword" },
    denominationUsuelleEtablissement: { type: "keyword" },

    enseigne1Etablissement: { type: "keyword" },
    enseigne2Etablissement: { type: "keyword" },
    enseigne3Etablissement: { type: "keyword" },
    etablissements: { type: "rank_feature" },

    idcc: {
      fields: {
        number: {
          type: "integer",
        },
      },
      type: "keyword",
    },
    libelleCommuneEtablissement: { type: "keyword" },
    naming: {
      analyzer: "french_indexing",
      similarity: "bm25_no_norm_length",
      type: "text",
    },
    nomUniteLegale: { type: "keyword" },

    nomUsageUniteLegale: { type: "keyword" },
    sigleUniteLegale: { type: "keyword" },

    siren: { type: "keyword" },

    siret: { type: "keyword" },

    siretRank: { type: "rank_feature" },

    trancheEffectifsUniteLegale: { type: "rank_feature" },

    ville: {
      analyzer: "french_indexing",
      type: "text",
    },
    withIdcc: { type: "boolean" },
  },
};

export const mapEnterprise = (enterprise: Enterprise) => {
  // ranking feature cannot be 0
  if (
    !Number.parseFloat(
      enterprise.trancheEffectifsUniteLegale as unknown as string
    )
  ) {
    enterprise.trancheEffectifsUniteLegale = 0.1;
  }

  const siretRank = enterprise.siret;

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
    .map((code) => code.replace(/\w$/, ""))
    .find((s) => !s.startsWith("00.00")); // 00.00Z is a temporary code

  const activitePrincipale =
    codeActivitePrincipale !== undefined
      ? codesNaf.get(codeActivitePrincipale)
      : undefined;

  const convention = enterprise.idcc
    ? ccMap.get(parseInt(enterprise.idcc))?.shortTitle
    : undefined;

  const withIdcc =
    (enterprise.idcc &&
      parseInt(enterprise.idcc) !== 0 &&
      parseInt(enterprise.idcc) !== 9999) ||
    false;

  return {
    activitePrincipale,
    address: enterprise.geo_adresse,
    convention,
    cp: enterprise.codePostalEtablissement || undefined,
    naming,
    siretRank,
    ville: enterprise.libelleCommuneEtablissement,
    withIdcc,
    ...Object.fromEntries(
      Object.entries(enterprise).filter(([k, v]) => k && v)
    ),
  };
};
