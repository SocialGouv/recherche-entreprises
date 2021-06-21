import env from "@kosko/env";
import { create } from "@socialgouv/kosko-charts/components/netpol";

const getManifests = async () => {
  const manifests = [];
  if (env.env === "prod") {
    const manifest = await create("recherche-entreprises");
    manifests.push(manifest);
  }
  return manifests;
};

export default getManifests();
