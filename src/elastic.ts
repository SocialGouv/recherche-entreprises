import { Client, ClientOptions } from "@elastic/elasticsearch";
import { Enterprise, mapEnterprise, mappings } from "./enterprise";

const ELASTICSEARCH_URL =
  process.env.ELASTICSEARCH_URL || "http://localhost:9200";
const API_KEY = process.env.API_KEY;

const indexName = "cdtn-siren";

const auth = API_KEY ? { apiKey: API_KEY } : undefined;

const esClientConfig: ClientOptions = {
  auth,
  node: `${ELASTICSEARCH_URL}`,
};

const esClient = new Client(esClientConfig);

const analysis = {
  filter: {
    french_elision: {
      type: "elision",
      articles_case: true,
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
    },
    french_stop: {
      type: "stop",
      stopwords: "_french_",
    },
    french_stemmer: {
      type: "stemmer",
      language: "light_french",
    },
  },
  analyzer: {
    french_indexing: {
      tokenizer: "standard",
      filter: [
        "french_elision",
        "lowercase",
        "french_stop",
        "french_stemmer",
        // very important filter in order to remove duplication between
        // the different naming fields (nom, enseigne, denomination...)
        "unique",
      ],
    },
  },
};

const index = {
  similarity: {
    bm25_no_norm_length: {
      type: "BM25",
      b: 0,
    },
  },
};

const deleteOldIndices = async (alias: string, indexToKeep: string) => {
  const allIndices: string[] = await esClient.cat
    .indices({ format: "json" })
    .then(({ body }: { body: any }) =>
      body.map(({ index }: { index: string }) => index)
    );

  // list indices to delete
  const matchingIndices = allIndices.filter(
    (index) => index.startsWith(alias) && index != indexToKeep
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

const updateAlias = (indexPattern: string, newIndex: string, alias: string) =>
  esClient.indices.updateAliases({
    body: {
      actions: [
        {
          remove: {
            alias,
            index: indexPattern,
          },
        },
        {
          add: {
            alias: alias,
            index: newIndex,
          },
        },
      ],
    },
  });

export const resetIndex = async () => {
  const id = Math.floor(Math.random() * 100001);

  const newIndex = `${indexName}-${id}`;
  const indexPattern = `${indexName}-*`;

  const body = { mappings, settings: { analysis, index } };

  await esClient.indices.create({
    index: newIndex,
    body,
  });

  await updateAlias(indexPattern, newIndex, indexName);
  await deleteOldIndices(indexPattern, newIndex);
};

const bulkInsert = async (enterprises: Enterprise[]) => {
  // async function bulkIndexDocuments({ client, indexName, documents }) {
  try {
    const resp = await esClient.bulk({
      refresh: "wait_for",
      body: enterprises.reduce(
        (state, enterprise) =>
          state.concat(
            {
              index: {
                _index: indexName,
                _id: enterprise.siret,
              },
            } as any,
            mapEnterprise(enterprise) as any
          ),
        []
      ),

      //   body: enterprises.map(mapEnterprise),
      index: indexName,
    });
    if (resp.body.errors) {
      const errorDocs = resp.body.items.filter(
        (item: any) => item.index.status != 201
      );
      console.error(`Errors during indexation : ${JSON.stringify(errorDocs)}`);
    }
    console.info(`Index ${enterprises.length} documents.`);
  } catch (error) {
    console.error("index documents", error.body.error);
  }
};

export const add = async (enterprises: Enterprise[]) => {
  const batches = [];
  let i = 0;

  const batchSize = 100;
  while (i < enterprises.length) {
    batches.push(enterprises.slice(i, (i += batchSize)));
  }

  console.log(`${batches.length} batches`);

  return batches
    .map(bulkInsert)
    .reduce((prev, cur, i) => prev.then(cur as any), Promise.resolve());
};

export const query = (query: string): Enterprise[] => {
  return [];
};
