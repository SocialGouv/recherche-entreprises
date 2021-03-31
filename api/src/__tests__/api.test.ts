import supertest from "supertest";
import * as http from "http";
import Koa from "koa";
import { API_PREFIX, router } from "../routes";

export const app = new Koa();
app.use(router.routes());
// .on("error", (err, ctx) => {
// console.error("server error", err, ctx);
// });

const apptest = supertest(http.createServer(app.callback()));

const searchCall = (
  query: string,
  address: string | undefined,
  limit: number | undefined
) => {
  const addressQP = address ? `&a=${address}` : "";
  const limitQP = limit ? `&l=${limit}` : "";

  return apptest.get(`${API_PREFIX}/search?q=${query}${addressQP}${limitQP}`);
};

const michelinSiren = "855200507";
const michelinSiret = `${michelinSiren}00710`;

describe("Test search", () => {
  test("generic search", async () => {
    const { status, body } = await searchCall("michelin", undefined, undefined);
    expect(status).toBe(200);
    expect(body.entreprises).toBeDefined();
    expect(body.entreprises.length).toEqual(20);
    expect(body.entreprises[0].siret).toEqual(michelinSiret);
    expect(body.entreprises[0]).toMatchSnapshot();
  });

  test("test with limit", async () => {
    const limit = 50;
    const { body } = await searchCall("michelin", undefined, limit);
    expect(body.entreprises.length).toEqual(limit);
  });

  test("search with postal code and city", async () => {
    const { body: b1 } = await searchCall("michelin", undefined, undefined);
    expect(b1.entreprises[0].address).toMatchInlineSnapshot(
      `"16 Rue de Toutlemonde 49300 Cholet"`
    );

    const { body: b2 } = await searchCall("michelin", "63 000", undefined);
    expect(b2.entreprises[0].address).toMatchInlineSnapshot(
      `"23 Place des Carmes Dechaux 63000 Clermont-Ferrand"`
    );

    const { body: b3 } = await searchCall("michelin", "clermont", undefined);
    expect(b3.entreprises[0].address).toMatchInlineSnapshot(
      `"23 Place des Carmes Dechaux 63000 Clermont-Ferrand"`
    );
  });

  test("search with siret", async () => {
    const { body } = await searchCall(michelinSiret, undefined, undefined);
    expect(body.entreprises[0].siret).toEqual(michelinSiret);
  });
});

describe("Test etablissement search", () => {
  test("correct siret", async () => {
    const { body, status } = await apptest.get(
      `${API_PREFIX}/etablissement/${michelinSiret}`
    );
    expect(status).toEqual(200);
    expect(body.siret).toEqual(michelinSiret);
  });

  test("unexisting siret", async () => {
    const { status } = await apptest.get(
      `${API_PREFIX}/etablissement/11111111111111`
    );
    expect(status).toEqual(404);
  });

  test("incorrect siret", async () => {
    const { status } = await apptest.get(
      `${API_PREFIX}/etablissement/${michelinSiret + "123"}`
    );
    expect(status).toEqual(400);
  });
});

describe("Test entreprise search", () => {
  test("correct siren", async () => {
    const { body, status } = await apptest.get(
      `${API_PREFIX}/entreprise/${michelinSiren}`
    );
    expect(status).toEqual(200);
    expect(body.siren).toEqual(michelinSiren);
    expect(body).toMatchSnapshot();
  });

  test("unexisting siret", async () => {
    const { status } = await apptest.get(`${API_PREFIX}/entreprise/111111111`);
    expect(status).toEqual(404);
  });

  test("incorrect siret", async () => {
    const { status } = await apptest.get(
      `${API_PREFIX}/entreprise/${michelinSiren + "123"}`
    );
    expect(status).toEqual(400);
  });
});
