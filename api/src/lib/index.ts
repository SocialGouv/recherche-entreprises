import { elasticsearchClient, ELASTICSEARCH_INDEX } from "../elastic";
import { entrepriseSearchBody, mapHit } from "../elastic/queries";

export const search = async (query: string) => {
  const body = entrepriseSearchBody(query, undefined, false);

  console.log(ELASTICSEARCH_INDEX);

  const response = await elasticsearchClient.search({
    body,
    index: ELASTICSEARCH_INDEX,
  });

  return response.body.hits.hits.map(mapHit);
};
