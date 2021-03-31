const { Client } = require("@elastic/elasticsearch");
const ELASTICSEARCH_URL =
  process.env.ELASTICSEARCH_URL || "http://localhost:9200";
const API_KEY = process.env.API_KEY;

const auth = API_KEY ? { apiKey: API_KEY } : undefined;

export const ELASTICSEARCH_INDEX =
  process.env.ELASTICSEARCH_INDEX || "cdtn-siren";

const esClientConfig = {
  node: `${ELASTICSEARCH_URL}`,
  auth,
};

export const elasticsearchClient = new Client(esClientConfig);
