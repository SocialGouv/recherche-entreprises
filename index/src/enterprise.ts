export type BceEtablissement = {
  eta_nic: string;
  eta_siren: string;
  eta_siret: string;
  eta_statutDiffusionEtablissement: string;
  eta_dateCreationEtablissement: string;
  eta_trancheEffectifsEtablissement: string;
  eta_anneeEffectifsEtablissement: string;
  eta_activitePrincipaleRegistreMetiersEtablissement: string;
  eta_dateDernierTraitementEtablissement: string;
  eta_etablissementSiege: string;
  eta_nombrePeriodesEtablissement: string;
  eta_complementAdresseEtablissement: string;
  eta_numeroVoieEtablissement: string;
  eta_indiceRepetitionEtablissement: string;
  eta_typeVoieEtablissement: string;
  eta_libelleVoieEtablissement: string;
  eta_codePostalEtablissement: string;
  eta_libelleCommuneEtablissement: string;
  eta_libelleCommuneEtrangerEtablissement: string;
  eta_distributionSpecialeEtablissement: string;
  eta_codeCommuneEtablissement: string;
  eta_codeCedexEtablissement: string;
  eta_libelleCedexEtablissement: string;
  eta_codePaysEtrangerEtablissement: string;
  eta_libellePaysEtrangerEtablissement: string;
  eta_complementAdresse2Etablissement: string;
  eta_numeroVoie2Etablissement: string;
  eta_indiceRepetition2Etablissement: string;
  eta_typeVoie2Etablissement: string;
  eta_libelleVoie2Etablissement: string;
  eta_codePostal2Etablissement: string;
  eta_libelleCommune2Etablissement: string;
  eta_libelleCommuneEtranger2Etablissement: string;
  eta_distributionSpeciale2Etablissement: string;
  eta_codeCommune2Etablissement: string;
  eta_codeCedex2Etablissement: string;
  eta_libelleCedex2Etablissement: string;
  eta_codePaysEtranger2Etablissement: string;
  eta_libellePaysEtranger2Etablissement: string;
  eta_dateDebut: string;
  eta_etatAdministratifEtablissement: string;
  eta_enseigne1Etablissement: string;
  eta_enseigne2Etablissement: string;
  eta_enseigne3Etablissement: string;
  eta_denominationUsuelleEtablissement: string;
  eta_activitePrincipaleEtablissement: string;
  eta_nomenclatureActivitePrincipaleEtablissement: string;
  eta_caractereEmployeurEtablissement: string;
  ent_siren: string;
  ent_statutDiffusionUniteLegale: string;
  ent_unitePurgeeUniteLegale: string;
  ent_dateCreationUniteLegale: string;
  ent_sigleUniteLegale: string;
  ent_sexeUniteLegale: string;
  ent_prenom1UniteLegale: string;
  ent_prenom2UniteLegale: string;
  ent_prenom3UniteLegale: string;
  ent_prenom4UniteLegale: string;
  ent_prenomUsuelUniteLegale: string;
  ent_pseudonymeUniteLegale: string;
  ent_identifiantAssociationUniteLegale: string;
  ent_trancheEffectifsUniteLegale: string;
  ent_anneeEffectifsUniteLegale: string;
  ent_dateDernierTraitementUniteLegale: string;
  ent_nombrePeriodesUniteLegale: string;
  ent_categorieEntreprise: string;
  ent_anneeCategorieEntreprise: string;
  ent_dateDebut: string;
  ent_etatAdministratifUniteLegale: string;
  ent_nomUniteLegale: string;
  ent_nomUsageUniteLegale: string;
  ent_denominationUniteLegale: string;
  ent_denominationUsuelle1UniteLegale: string;
  ent_denominationUsuelle2UniteLegale: string;
  ent_denominationUsuelle3UniteLegale: string;
  ent_categorieJuridiqueUniteLegale: string;
  ent_activitePrincipaleUniteLegale: string;
  ent_nomenclatureActivitePrincipaleUniteLegale: string;
  ent_nicSiegeUniteLegale: string;
  ent_economieSocialeSolidaireUniteLegale: string;
  ent_caractereEmployeurUniteLegale: string;
  ent_raisonSociale: string;
  eff_MOIS: string;
  eff_SIRET: string;
  eff_EFF_TOTAL: string;
  eff_EFF_HOMME: string;
  eff_EFF_FEMME: string;
  eff_NB_CDD: string;
  eff_NB_CDI: string;
  eff_NB_CDI_INTER: string;
  eff_NB_INTER_MISSION: string;
  eff_NB_INTERIM: string;
  eff_DATE_MAJ: string;
  cc_MOIS: string;
  cc_SIRET: string;
  cc_IDCC: string;
  cc_DATE_MAJ: string;
  Tranche_effectif_DSN: string;
  Departement: string;
  Nombre_Eta: string;
};

export type Enterprise = {
  siren: string;
  trancheEffectifsUniteLegale: number;

  nomUniteLegale: string;
  nomUsageUniteLegale: string;
  sigleUniteLegale: string;
  etablissementSiege: string;

  denominationUniteLegale: string;
  denominationUsuelle1UniteLegale: string;
  denominationUsuelle2UniteLegale: string;
  denominationUsuelle3UniteLegale: string;

  raisonSociale: string;

  enseigne1Etablissement: string;
  enseigne2Etablissement: string;
  enseigne3Etablissement: string;
  denominationUsuelleEtablissement: string;

  etablissements: number;

  categorieJuridiqueUniteLegale: string;
  activitePrincipaleUniteLegale: string;
  activitePrincipaleEtablissement: string;

  nomenclatureActivitePrincipaleUniteLegale: string;
  siret: string;
  codePostalEtablissement: string;
  libelleCommuneEtablissement: string;

  // MOIS: '2020-07',
  // DATE_MAJ: '2020/08/28'

  idcc: string | undefined;
  geo_adresse: string;

  categorieEntreprise: string;
  etatAdministratifUniteLegale: string;
  caractereEmployeurUniteLegale: string;
  etatAdministratifEtablissement: string;
  caractereEmployeurEtablissement: string;

  complementAdresseEtablissement: string;
  numeroVoieEtablissement: string;
  indiceRepetitionEtablissement: string;
  typeVoieEtablissement: string;
  libelleVoieEtablissement: string;
};

export const mappings = {
  properties: {
    siren: { type: "keyword" },
    siret: { type: "keyword" },
    siretRank: { type: "rank_feature" },

    raisonSociale: {
      analyzer: "french_indexing",
      similarity: "bm25_no_norm_length",
      type: "text",
    },
    denominationUsuelleUniteLegale: {
      analyzer: "french_indexing",
      similarity: "bm25_no_norm_length",
      type: "text",
    },
    enseigneEtablissement: {
      analyzer: "french_indexing",
      similarity: "bm25_no_norm_length",
      type: "text",
    },

    trancheEffectifsUniteLegale: { type: "keyword" },
    trancheEffectifsUniteLegaleRank: { type: "rank_feature" },
    trancheEffectifsEtablissement: { type: "keyword" },
    trancheEffectifsEtablissementRank: { type: "rank_feature" },

    domaineActivite: { type: "keyword" },

    codeCommuneEtablissement: { type: "keyword" },
    departementEtablissement: { type: "keyword" },

    etatAdministratifEtablissement: { type: "keyword" },
    etablissementSiege: { type: "boolean" },
    caractereEmployeurEtablissementRank: { type: "rank_feature" },

    etablissementsUniteLegaleRank: { type: "rank_feature" },
  },
};

const getTrancheEffectif = (effectif: string): string => {
  if (effectif === "") {
    return "-";
  }

  const numEffectif = +effectif;

  if (numEffectif === 0) return "00";
  if (numEffectif <= 2) return "01";
  if (numEffectif <= 5) return "02";
  if (numEffectif <= 9) return "03";
  if (numEffectif <= 19) return "11";
  if (numEffectif <= 49) return "12";
  if (numEffectif <= 99) return "21";
  if (numEffectif <= 249) return "22";
  if (numEffectif <= 499) return "31";
  if (numEffectif <= 999) return "32";
  if (numEffectif <= 1999) return "41";
  if (numEffectif <= 4999) return "42";
  if (numEffectif > 4999) return "51";

  return "00";
}

const removeEmpty = (document: any): object =>
  Object.keys(document)
    .reduce((res: any, key: string) => {
      const value = document[key];

      if (value !== undefined && value !== null && value !== "") {
        res[key] = value
      }

      return res;
    }, {});

const getRank = (effectif: string) => {
  const effectifNumber = +effectif;

  return isNaN(effectifNumber) ? 0.1 : Math.max(effectifNumber, 0.1);
}

export const mapEnterprise = (enterprise: BceEtablissement) => {
  const naming = Array.from(
    new Set([
      enterprise.ent_prenom1UniteLegale,
      enterprise.ent_nomUniteLegale,
      enterprise.ent_nomUsageUniteLegale,
      enterprise.ent_sigleUniteLegale,

      enterprise.ent_denominationUniteLegale,
      enterprise.ent_denominationUsuelle1UniteLegale,
      enterprise.ent_denominationUsuelle2UniteLegale,
      enterprise.ent_denominationUsuelle3UniteLegale,

      enterprise.eta_enseigne1Etablissement,
      enterprise.eta_enseigne2Etablissement,
      enterprise.eta_enseigne3Etablissement,
      enterprise.eta_denominationUsuelleEtablissement,
    ])
  )
    .filter((t) => t)
    .join(" ");

  const codeActivitePrincipale = [
    enterprise.eta_activitePrincipaleEtablissement,
    enterprise.ent_activitePrincipaleUniteLegale,
  ]
    .find((s) => !s.startsWith("00.00")); // 00.00Z is a temporary code

  const adresseEtablissement = [
    enterprise.eta_numeroVoieEtablissement,
    enterprise.eta_indiceRepetitionEtablissement,
    enterprise.eta_typeVoieEtablissement,
    enterprise.eta_libelleVoieEtablissement,
  ].join(' ').trim().replace(/  /, ' ');

  const departementEtablissement = enterprise.eta_codePostalEtablissement.slice(
    0,
    +enterprise.eta_codePostalEtablissement.slice(0, 2) > 95 ? 3 : 2
  );

  const domaineActivite = codeActivitePrincipale?.slice(0, 2);

  // ranking feature cannot be 0
  const trancheEffectifsUniteLegale = getTrancheEffectif(enterprise.ent_trancheEffectifsUniteLegale);
  const trancheEffectifsEtablissement = getTrancheEffectif(enterprise.eff_EFF_TOTAL);

  const document = {
    siren: enterprise.ent_siren,
    siret: enterprise.eta_siret,
    siretRank: enterprise.eta_siret,

    naming,
    denominationUniteLegale: enterprise.ent_denominationUniteLegale,
    denominationUsuelleUniteLegale: enterprise.ent_denominationUsuelle1UniteLegale,
    prenomUniteLegale: enterprise.ent_prenom1UniteLegale,
    nomUniteLegale: enterprise.ent_nomUniteLegale,
    enseigneEtablissement: enterprise.eta_enseigne1Etablissement,
    raisonSociale: enterprise.ent_raisonSociale,

    trancheEffectifsUniteLegale,
    trancheEffectifsUniteLegaleRank: getRank(trancheEffectifsUniteLegale),
    trancheEffectifsEtablissement: trancheEffectifsEtablissement,
    trancheEffectifsEtablissementRank: getRank(trancheEffectifsEtablissement),

    codeActivitePrincipale,
    domaineActivite,

    adresseEtablissement: adresseEtablissement,
    complementAdresseEtablissement: enterprise.eta_complementAdresseEtablissement,
    codePostalEtablissement: enterprise.eta_codePostalEtablissement,
    libelleCommuneEtablissement: enterprise.eta_libelleCommuneEtablissement,
    codeCommuneEtablissement: enterprise.eta_codeCommuneEtablissement || enterprise.eta_codeCommune2Etablissement,
    departementEtablissement,

    etatAdministratifEtablissement: enterprise.eta_etatAdministratifEtablissement,
    etablissementSiege: enterprise.eta_etablissementSiege === "true",

    caractereEmployeurEtablissementRank: enterprise.eta_caractereEmployeurEtablissement === "O" ? 1 : 0.1,

    etablissementsUniteLegaleRank: getRank(enterprise.Nombre_Eta),
    statutDiffusionEtablissement: enterprise.eta_statutDiffusionEtablissement
  };

  return removeEmpty(document);
};
