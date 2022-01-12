import env from "@kosko/env";
import { create } from "@socialgouv/kosko-charts/components/app";
import { getGithubRegistryImagePath } from "@socialgouv/kosko-charts/utils/getGithubRegistryImagePath";
import {
  getDeployment,
  getIngressHost,
  addEnvs,
} from "@socialgouv/kosko-charts/utils";

import api from "./api";

const getManifests = async () => {
  const manifests = await create("recherche-entreprises-front", {
    config: {
      containerPort: 3000,
    },
    deployment: {
      image: getGithubRegistryImagePath({
        name: "front",
        project: "recherche-entreprises",
      }),
    },
    env,
  });
  const deployment = getDeployment(manifests);
  const apiManifests = await api();
  const apiUrl = getIngressHost(apiManifests);
  addEnvs({
    deployment,
    data: {
      REACT_APP_API_URL: `https://${apiUrl}/api/v1`,
    },
  });

  return manifests;
};

export default getManifests;
