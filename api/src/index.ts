import Koa from "koa";
import { router } from "./routes";
export const app = new Koa();

const port = process.env.API_PORT || 3000;

app.use(router.routes());
app.listen(port);

console.log(`API started on port ${port}`);
