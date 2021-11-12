import { Client, ClientOptions } from "@elastic/elasticsearch";

import { mappings } from "./enterprise";

const ELASTICSEARCH_URL =
  process.env.ELASTICSEARCH_URL || "http://localhost:9200";
const API_KEY = process.env.ELASTICSEARCH_API_KEY;

const INDEX_NAME =
  process.env.ELASTICSEARCH_INDEX_NAME || "recherche-entreprises";
const indexPattern = `${INDEX_NAME}-*`;

const auth = API_KEY ? { apiKey: API_KEY } : undefined;

// https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/master/basic-config.html

const esClientConfig: ClientOptions = {
  auth,
  node: ELASTICSEARCH_URL,
  agent: false,
  maxRetries: 20,
  requestTimeout: 10000,
  disablePrototypePoisoningProtection: true,
};

export const esClient = new Client(esClientConfig);

const analysis = {
  analyzer: {
    french_indexing: {
      filter: [
        "french_elision",
        "lowercase",
        // company labels do not include diatrics
        "asciifolding",
        "french_stop",
        "french_stemmer",
        // very important filter in order to remove duplication between
        // the different naming fields (nom, enseigne, denomination...)
        "unique",
      ],
      tokenizer: "standard",
    },
  },
  filter: {
    french_elision: {
      articles: [
        "l",
        "m",
        "t",
        "qu",
        "n",
        "s",
        "j",
        "d",
        "c",
        "jusqu",
        "quoiqu",
        "lorsqu",
        "puisqu",
      ],
      articles_case: true,
      type: "elision",
    },
    french_stemmer: {
      language: "light_french",
      type: "stemmer",
    },
    french_stop: {
      stopwords: "_french_",
      type: "stop",
    },
  },
};

const index = {
  similarity: {
    bm25_no_norm_length: {
      b: 0,
      type: "BM25",
    },
  },
};

export const deleteOldIndices = async (indexToKeep: string): Promise<void> => {
  const allIndices: string[] = await esClient.cat
    .indices({ format: "json" })
    .then(({ body }) => body.map(({ index }: { index: string }) => index));

  // list indices to delete
  const matchingIndices = allIndices.filter(
    (index) =>
      index.startsWith(indexPattern.substring(0, indexPattern.length - 2)) &&
      index != indexToKeep
  );

  const deletePromises = matchingIndices.map((index) =>
    esClient.indices.delete({ index })
  );

  await Promise.all(deletePromises)
    .then(() => console.log(`Indices deleted: ${matchingIndices}`))
    .catch(() =>
      console.error(`Error when trying to delete ${matchingIndices}`)
    );
};

export const updateAlias = (newIndexName: string) => {
  console.log(`Remove alias ${indexPattern} for ${INDEX_NAME}`);
  console.log(`Set Alias ${INDEX_NAME} to ${newIndexName}`);
  return esClient.indices.updateAliases({
    body: {
      actions: [
        {
          remove: {
            alias: INDEX_NAME,
            index: indexPattern,
          },
        },
        {
          add: {
            alias: INDEX_NAME,
            index: newIndexName,
          },
        },
      ],
    },
  });
};

export const createIndex = async (): Promise<string> => {
  const id = Math.floor(Math.random() * 10e8);
  const newIndexName = `${INDEX_NAME}-${id}`;
  const body = { mappings, settings: { analysis, index } };
  await esClient.indices.create({
    body,
    index: newIndexName,
  });
  return newIndexName;
};

export const getDocsCount = async (indexName: string): Promise<number> => {
  const stats = await esClient.indices.stats({ index: indexName });
  return stats.body._all.primaries.docs.count;
};
