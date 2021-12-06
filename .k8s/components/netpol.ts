import environments from "@socialgouv/kosko-charts/environments";
import { create } from "@socialgouv/kosko-charts/components/netpol";

const getManifests = () => {
  const ciEnv = environments(process.env);
  return create(ciEnv.metadata.namespace.name);
};

export default getManifests;
