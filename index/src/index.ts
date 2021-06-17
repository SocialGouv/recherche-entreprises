import * as fs from "fs";
import * as path from "path";
import * as csv from "fast-csv";
import {
  esClient,
  createIndex,
  updateAlias,
  deleteOldIndices,
  getDocsCount,
} from "./elastic";
import { Enterprise, mapEnterprise } from "./enterprise";

const ASSEMBLY_FILE =
  process.env.ASSEMBLY_FILE || "../assembly/output/assembly.csv";

async function* manipulate(stream: any) {
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
    //@ts-expect-error
    datasource: manipulate(csvStream),
    onDocument: (enterprise: Enterprise) => ({
      index: {
        _index: indexName,
        _id: enterprise.siret,
      },
    }),
  });
};

if (require.main === module) {
  // use elastic alias feature to prevent downtimes
  createIndex().then(async (indexName) =>
    insertEntreprises(indexName)
      .then(async () => {
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
      .then(() => deleteOldIndices(indexName))
  );
}
