import * as csv from "fast-csv";
import * as fs from "fs";
import * as path from "path";
import { Transform } from "stream";

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

const INDEXATION_LIMIT = process.env.INDEXATION_LIMIT || 0;
let prevSiret = "";
async function* manipulate(
  stream: csv.CsvParserStream<
    csv.ParserRow<Enterprise>,
    csv.ParserRow<Enterprise>
  >
) {
  let countDone = 0;
  for await (const enterprise of stream) {
    prevSiret = enterprise.eta_siret;
    countDone++;
    if (countDone % 10000 === 0) {
      console.log(`created ${countDone} records`);
    }
    yield mapEnterprise(enterprise);
    // allow short-circuit in dev
    if (INDEXATION_LIMIT && countDone === parseInt(INDEXATION_LIMIT)) {
      break;
    }
  }
}

const formatMs = (ms: number) => `${(ms / 1000).toFixed(2)} seconds.`;

let lastRow = "";

// apply mapEntreprise to the CSV stream
// then bulk insert with Es client
const insertEntreprises = async (indexName: string) => {
  const stream = fs.createReadStream(path.resolve(ASSEMBLY_FILE));
  
  const csvStream = csv
    .parseStream(stream, { headers: true }).on("error", (err) => {
      console.error(prevSiret, err.name, err.message);
      console.error(err);
      console.error(lastRow);
    });

  const result = await esClient.helpers.bulk({
    //@ts-expect-error(expected)
    datasource: manipulate(csvStream),
    onDocument: (enterprise: Enterprise) => ({
      index: {
        //_id: `${enterprise.siret}-${enterprise.idcc || ""}`,
        _index: indexName,
      },
    }),
    onDrop({ status, error }) {
      console.log(`dropped`, status, error);
    },
    refreshOnCompletion: true,
    concurrency: 5,
  });

  console.log("result:", JSON.stringify(result));

  console.log(`Total duration: ${formatMs(result.time)}`);

  if (result.failed === 0) {
    console.log(`Created ${result.successful} documents successfully`);
  } else {
    console.log(`${result.failed} documents failed, abort`);
    throw new Error(`${result.failed} documents failed, abort`);
  }
  //
};

if (require.main === module) {
  console.log(`Creating index`);
  createIndex()
    .then(async (indexName) => {
      console.log(`Starting indexation in index ${indexName}...`);
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
        .catch((err) => {
          console.log("Error " + JSON.stringify(err, null, 2));
          throw err;
        })
        .then(() => updateAlias(indexName))
        .then(() => deleteOldIndices(indexName));
    })
    .catch((err) => {
      console.log("Error " + JSON.stringify(err, null, 2));
      throw err;
    });
}
