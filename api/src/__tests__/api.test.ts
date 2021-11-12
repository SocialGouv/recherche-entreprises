import * as http from "http";
import Koa from "koa";
import supertest from "supertest";

import { API_PREFIX, router } from "../routes";

const app = new Koa();
app.use(router.routes());
// .on("error", (err, ctx) => {
// console.error("server error", err, ctx);
// });

const apptest = supertest(http.createServer(app.callback()));

const searchCall = ({
  query,
  address,
  limit,
  open,
  employer,
  convention,
}: {
  query: string;
  address?: string;
  limit?: number;
  open?: boolean;
  employer?: boolean;
  convention?: boolean;
}) => {
  const addressQP = address ? `&address=${address}` : "";
  const limitQP = limit ? `&limit=${limit}` : "";

  const openQP = open ? `&open=${open}` : "";
  const employerQP = employer ? `&employer=${employer}` : "";

  return apptest.get(
    `${API_PREFIX}/search?convention=${
      convention || true
    }&query=${query}${addressQP}${limitQP}${openQP}${employerQP}`
  );
};

const michelinSiren = "855200507";
const michelinSiret = `${michelinSiren}03169`;

describe("Test search", () => {
  test("generic search", async () => {
    const { status, body } = await searchCall({ query: "michelin" });

    expect(status).toBe(200);
    expect(body.entreprises).toBeDefined();
    expect(body.entreprises.length).toEqual(20);
    expect(body.entreprises[0].siren).toEqual(michelinSiren);
    // eslint-disable-next-line no-unused-vars
    const { matchingEtablissement, ...partialBody } = body.entreprises[0];
    expect(partialBody).toMatchSnapshot();
  });

  test("with limit", async () => {
    const limit = 50;
    const { body } = await searchCall({ limit, query: "michelin" });
    expect(body.entreprises.length).toEqual(limit);
  });

  test("search with postal code and city", async () => {
    const { body: b1 } = await searchCall({ query: "michelin" });
    expect(b1.entreprises[0].matchingEtablissement.address).not.toBe(
      `"23 Place des Carmes Dechaux 63000 Clermont-Ferrand"`
    );

    const { body: b2 } = await searchCall({
      address: "63 000",
      query: "michelin",
    });
    expect(
      b2.entreprises[0].matchingEtablissement.address
    ).toMatchInlineSnapshot(
      `"Place des Carmes Dechaux 63000 Clermont-Ferrand"`
    );

    const { body: b3 } = await searchCall({
      address: "clermont",
      query: "michelin",
    });
    expect(
      b3.entreprises[0].matchingEtablissement.address
    ).toMatchInlineSnapshot(
      `"Place des Carmes Dechaux 63000 Clermont-Ferrand"`
    );

    const { body: b4 } = await searchCall({ address: "63", query: "michelin" });
    expect(
      b4.entreprises[0].matchingEtablissement.address
    ).toMatchInlineSnapshot(
      `"Place des Carmes Dechaux 63000 Clermont-Ferrand"`
    );
  });

  test("search with diatrics", async () => {
    const { body: b1 } = await searchCall({ query: "michelin" });
    const { body: b2 } = await searchCall({ query: "michélin" });
    const { body: b3 } = await searchCall({ query: "Mîchèlin" });

    expect(b1).toStrictEqual(b2);
    expect(b1).toStrictEqual(b3);
  });

  test("search with siret", async () => {
    const { body } = await searchCall({ query: michelinSiret });
    expect(body.entreprises[0].matchingEtablissement.siret).toEqual(
      michelinSiret
    );
  });

  // test with siret starting with 0
});

describe("Test etablissement search", () => {
  test("correct siret", async () => {
    const { body, status } = await apptest.get(
      `${API_PREFIX}/etablissement/${michelinSiret}`
    );
    expect(status).toEqual(200);
    expect(body.siret).toEqual(michelinSiret);
    expect(body).toMatchSnapshot();
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
    // We delete matchingEtablissement since it comes from collapse wich is non deterministic
    delete body.matchingEtablissement;
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

describe("Test api params", () => {
  test("not only open", async () => {
    const { body: b1 } = await searchCall({ open: false, query: "michelin" });
    expect(b1).toMatchSnapshot();
  });

  test("not only employeur", async () => {
    const { body: b1 } = await searchCall({
      employer: false,
      query: "michelin",
    });
    expect(b1).toMatchSnapshot();
  });

  test("not with convention", async () => {
    const { body: b1 } = await searchCall({
      convention: false,
      query: "michelin",
    });
    expect(b1).toMatchSnapshot();
  });
});
