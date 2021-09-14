import * as csv from "fast-csv";
import * as fs from "fs";
import * as path from "path";

import {
  createIndex,
  deleteOldIndices,
  esClient,
  getDocsCount,
  updateAlias,
} from "./elastic";
import { Enterprise, mapEnterprise } from "./enterprise";

const ASSEMBLY_FILE =
  process.env.ASSEMBLY_FILE || "../assembly/output/assembly.csv";

async function* manipulate(
  stream: csv.CsvParserStream<
    csv.ParserRow<Enterprise>,
    csv.ParserRow<Enterprise>
  >
) {
  for await (const enterprise of stream) {
    yield mapEnterprise(enterprise);
  }
}

// apply mapEntreprise to the CSV stream
// then bulk insert with Es client
const insertEntreprises = async (indexName: string) => {
  const stream = fs.createReadStream(path.resolve(ASSEMBLY_FILE));
  const csvStream = csv.parseStream(stream, { headers: true });

  return esClient.helpers.bulk({
    //@ts-expect-error(expected)
    datasource: manipulate(csvStream),
    onDocument: (enterprise: Enterprise) => ({
      index: {
        _id: `${enterprise.siret}-${enterprise.idcc}`,
        _index: indexName,
      },
    }),
    refreshOnCompletion: true,
  });
};

if (require.main === module) {
  // use elastic alias feature to prevent downtimes
  console.log(`Creating index`);
  createIndex()
    .then(async (indexName) => {
      console.log(`Starting indexation...`);
      return insertEntreprises(indexName)
        .then(async () => {
          console.log(`Indexation complete`);
          // ensure we have some data
          const docsCount = await getDocsCount(indexName);
          if (!docsCount) {
            throw new Error(
              `No document created in index ${indexName}, skip aliasing`
            );
          } else {
            console.log(`Created ${docsCount} documents in index ${indexName}`);
          }
        })
        .then(() => updateAlias(indexName))
        .then(() => deleteOldIndices(indexName));
    })
    .catch((err) => console.log("Error " + JSON.stringify(err, null, 2)));
}
