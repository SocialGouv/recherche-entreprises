import * as fs from "fs";
import * as path from "path";
import * as csv from "fast-csv";
import {
  add,
  createIndex,
  updateAlias,
  deleteOldIndices,
  getDocsCount,
} from "./elastic";
import { Enterprise } from "./enterprise";

const ASSEMBLY_FILE = process.env.ASSEMBLY_FILE || "../output/assembly.csv";

const insertEntreprises = (indexName: string) => {
  const stream = fs.createReadStream(path.resolve(ASSEMBLY_FILE));

  const BUFFER_SIZE = 500;
  let enterprisesBuffer: Enterprise[] = [];

  stream
    .pipe(csv.parse({ headers: true }))
    .on("error", (error) => console.error(error))
    .on("data", async (e) => {
      enterprisesBuffer.push(e);

      if (enterprisesBuffer.length >= BUFFER_SIZE) {
        // create an immutable copy of the array
        const batch = enterprisesBuffer.slice();
        enterprisesBuffer = [];
        await add(batch, indexName);

        // to run experiments
        // stream.destroy();
      }
    })
    .on("end", (rowCount: number) => console.log(`Parsed ${rowCount} rows`));

  return new Promise((fulfill) =>
    stream.on("finish", fulfill).on("close", fulfill)
  );
};

if (require.main === module) {
  // use elastic alias feature to prevent downtimes
  createIndex().then(async (indexName) =>
    insertEntreprises(indexName)
      .then(async () => {
        // ensure we have some data
        const docsCount = await getDocsCount(indexName);
        if (!docsCount) {
          throw new Error(`No document created in index ${indexName}, skip aliasing`);
        } else {
          console.log(`Created ${docsCount} documents in index ${indexName}`);
        }
      })
      .then(() => updateAlias(indexName))
      .then(() => deleteOldIndices(indexName))
  );
}
