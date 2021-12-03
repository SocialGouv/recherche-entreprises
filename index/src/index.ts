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

const INDEXATION_LIMIT = process.env.INDEXATION_LIMIT || 0;

async function* manipulate(
  stream: csv.CsvParserStream<
    csv.ParserRow<Enterprise>,
    csv.ParserRow<Enterprise>
  >
) {
  let countDone = 0;

  // keep track of last etablissement
  let last: { siret: string; idccs: string[]; data: any } = {
    siret: "init",
    idccs: [],
    data: undefined,
  };

  const addIdcc = (idcc: string) => {
    if (idcc) {
      last.idccs.push(idcc.trim());
    }
  };

  for await (const enterprise of stream) {
    countDone++;
    if (countDone % 10000 === 0) {
      console.log(`created ${countDone} records`);
    }

    const siret = enterprise.siret;

    // deal with etablissements with multiple idccs (conventions collectives)
    // case different siret than previous occurence
    // we return previous and keep track of new one
    if (last.siret !== siret) {
      // unless init case, yielding last
      if (last.data) {
        // console.log("yield", { siret: last.siret, idccs: last.idccs });
        yield mapEnterprise({ ...last.data, idccs: last.idccs });
      }
      last = { siret, data: enterprise, idccs: [] };
      addIdcc(enterprise.idcc);
    }
    // case same siret than last occurence
    // we add idcc to last one
    else {
      addIdcc(enterprise.idcc);
    }

    // allow short-circuit in dev
    if (INDEXATION_LIMIT && countDone === parseInt(INDEXATION_LIMIT)) {
      break;
    }
  }

  // yield last one
  yield mapEnterprise(last.data);
}

const formatMs = (ms: number) => `${(ms / 1000).toFixed(2)} seconds.`;

// apply mapEntreprise to the CSV stream
// then bulk insert with Es client
const insertEntreprises = async (indexName: string) => {
  const stream = fs.createReadStream(path.resolve(ASSEMBLY_FILE));
  const csvStream = csv.parseStream(stream, { headers: true });

  const result = await esClient.helpers.bulk({
    //@ts-expect-error(expected)
    datasource: manipulate(csvStream),
    onDocument: (enterprise: Enterprise) => ({
      index: {
        //_id: `${enterprise.siret}-${enterprise.idcc || ""}`,
        _index: indexName,
      },
    }),
    onDrop(doc) {
      console.log(`dropped ${doc}`);
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
