--- Output index data
--- sqlite3 -header -csv db.sqlite ".read export.sql" > output.csv

PRAGMA synchronous = OFF;

SELECT 
    stock.siren,
    stock.sigleUniteLegale,
    stock.nomUniteLegale,
    stock.prenom1UniteLegale,
    stock.nomUsageUniteLegale,
    stock.denominationUniteLegale,
    stock.denominationUsuelle1UniteLegale,
    stock.denominationUsuelle2UniteLegale,
    stock.denominationUsuelle3UniteLegale,
    stock.activitePrincipaleUniteLegale,
    stock.trancheEffectifsUniteLegale,
    stock.categorieJuridiqueUniteLegale,
    stock.nomenclatureActivitePrincipaleUniteLegale,
    stock.categorieEntreprise,
    stock.etatAdministratifUniteLegale,
    stock.caractereEmployeurUniteLegale,
    stock.dateCreationUniteLegale,
    geo_siret.siret,
    geo_siret.codePostalEtablissement,
    geo_siret.libelleCommuneEtablissement,
    geo_siret.codeCommuneEtablissement,
    geo_siret.etatAdministratifEtablissement,
    geo_siret.enseigne1Etablissement,
    geo_siret.enseigne2Etablissement,
    geo_siret.enseigne3Etablissement,
    geo_siret.denominationUsuelleEtablissement,
    geo_siret.activitePrincipaleEtablissement,
    geo_siret.geo_adresse,
    geo_siret.complementAdresseEtablissement,
    geo_siret.numeroVoieEtablissement,
    geo_siret.indiceRepetitionEtablissement,
    geo_siret.typeVoieEtablissement,
    geo_siret.libelleVoieEtablissement,
    geo_siret.etablissementSiege,
    geo_siret.codePaysEtrangerEtablissement,
    weez.IDCC as idcc,
    (select count(*) FROM geo_siret where siren=stock.siren) etablissements
    from stock, geo_siret
        left join weez on weez.SIRET=geo_siret.siret
        where stock.siren=geo_siret.siren;


