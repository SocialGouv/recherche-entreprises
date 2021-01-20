import * as fs from "fs";
import * as path from "path";
import * as csv from "fast-csv";
import { add, resetIndex } from "./elastic";
import { Enterprise, mapEnterprise } from "./enterprise";

const enterprises: Enterprise[] = [];

const parseEnterprises = () => {
  const stream = fs.createReadStream(path.resolve("./siret-idcc.csv"));
  stream
    .pipe(csv.parse({ headers: true }))
    .on("error", (error) => console.error(error))
    .on("data", (e) => {
      enterprises.push(e);
      //   if (enterprises.length > 10) stream.destroy();
    })
    .on("end", (rowCount: number) => console.log(`Parsed ${rowCount} rows`));

  return new Promise((fulfill) =>
    stream.on("finish", fulfill).on("close", fulfill)
  );
};

const ingestEnterprises = async () => {
  await resetIndex();
  await add(enterprises);
};

parseEnterprises().then(() => ingestEnterprises());
