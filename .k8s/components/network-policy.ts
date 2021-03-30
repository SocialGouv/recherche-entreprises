import env from "@kosko/env";

import { create } from "@socialgouv/kosko-charts/components/netpol";

const manifests = [];

if (env.env === "prod") {
  const manifest = create("recherche-entreprises");
  manifests.push(manifest);
}
export default manifests;
