import Koa from "koa";
import cors from "@koa/cors";
import serve from "koa-static";
import { router } from "./routes";

export const app = new Koa();

app.use(cors());

const port = process.env.PORT || 3000;

app.use(serve("./swagger-ui"));
app.use(router.routes());

app.listen(port);

console.log(`API started on port ${port}`);
console.log("ES host:", process.env.ELASTICSEARCH_URL);
