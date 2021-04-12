import Koa from "koa";
import cors from "@koa/cors";

import { router } from "./routes";

export const app = new Koa();

app.use(cors());

const port = process.env.API_PORT || 3000;

app.use(router.routes());
app.listen(port);

console.log(`API started on port ${port}`);
console.log("ES host:", process.env.ELASTICSEARCH_URL);
