import { ELASTICSEARCH_INDEX_NAME, elasticsearchClient } from "../elastic";
import type { SearchArgs } from "../elastic/queries";
import { entrepriseSearchBody, mapHit } from "../elastic/queries";

export const search = async ({
  query,
  address,
  addAllConventions,
  convention,
  limit,
  open,
  employer,
  ranked,
}: SearchArgs) => {
  const body = entrepriseSearchBody({
    addAllConventions,
    address,
    convention,
    employer,
    limit,
    open,
    query,
    ranked,
  });

  const response = await elasticsearchClient.search({
    body,
    // explain: true,
    index: ELASTICSEARCH_INDEX_NAME,
  });

  // console.log(JSON.stringify(body, null, 2));

  const entreprises = response.body.hits.hits.map(mapHit);

  // console.log(JSON.stringify(response, null, 2));

  return entreprises;
};

export const searchEntreprise = async (siren: string) => {
  const body = entrepriseSearchBody({
    addAllConventions: true,
    convention: false,
    employer: false,
    limit: 1,
    open: false,
    query: siren,
    ranked: true,
  });

  const response = await elasticsearchClient.search({
    body,
    index: ELASTICSEARCH_INDEX_NAME,
  });

  const matches = response.body.hits.hits.map(mapHit);

  if (matches && matches.length >= 1) {
    return matches[0];
  } else {
    return undefined;
  }
};

export const searchEtablissement = async (siret: string) => {
  const body = entrepriseSearchBody({
    addAllConventions: false,
    convention: false,
    employer: false,
    limit: 1,
    open: false,
    query: siret,
    ranked: true,
  });

  const response = await elasticsearchClient.search({
    body,
    index: ELASTICSEARCH_INDEX_NAME,
  });

  const matches = response.body.hits.hits.map(mapHit);

  if (matches && matches.length >= 1) {
    const raw = matches[0];

    // update some fields related to etablissement
    const firstMatching = raw.firstMatchingEtablissement;
    const etablissement = { ...raw, ...firstMatching };
    delete etablissement.firstMatchingEtablissement;
    delete etablissement.allMatchingEtablissements;

    return etablissement;
  } else {
    return undefined;
  }
};
