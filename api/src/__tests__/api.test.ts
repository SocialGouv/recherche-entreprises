import supertest from "supertest";
import * as http from "http";
import Koa from "koa";
import { API_PREFIX, router } from "../routes";

export const app = new Koa();
app.use(router.routes());

const apptest = supertest(http.createServer(app.callback()));

describe("Test endpoints", () => {
  test("generic search", async (done) => {
    const { status, body } = await apptest.get(`${API_PREFIX}/search?q=zara`);

    expect(status).toBe(200);
    expect(body).toMatchSnapshot();

    done();
  });
});
