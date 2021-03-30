import Router from "koa-router";
import { search } from "../lib";

export const router = new Router();

export const API_PREFIX = "/api/v1";

router.get(`${API_PREFIX}/search`, async (ctx) => {
  const { q: query, a: address, cc: withAllConventions } = ctx.query;

  if (!query) {
    ctx.throw(400, `query parameter q is required`);
  }

  try {
    const entreprises = await search(query as string);
    ctx.body = { entreprises };
  } catch (err) {
    console.log(JSON.stringify(err));
    ctx.throw(500);
  }
});

// search by name generic (return SIREN or SIRET)

// search with geo

// siret 2 idcc
