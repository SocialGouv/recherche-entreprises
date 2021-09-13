import { Client } from "@elastic/elasticsearch";

const ELASTICSEARCH_URL =
  process.env.ELASTICSEARCH_URL || "http://localhost:9200";
const API_KEY = process.env.ELASTICSEARCH_API_KEY;

const auth = API_KEY ? { apiKey: API_KEY } : undefined;

export const ELASTICSEARCH_INDEX =
  process.env.ELASTICSEARCH_INDEX || "recherche-entreprises";

const esClientConfig = {
  auth,
  node: ELASTICSEARCH_URL,
};

export const elasticsearchClient = new Client(esClientConfig);
