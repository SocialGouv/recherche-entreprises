import env from "@kosko/env";
import { create } from "@socialgouv/kosko-charts/components/app";
import { addEnv, getDeployment } from "@socialgouv/kosko-charts/utils";
import { getGithubRegistryImagePath } from "@socialgouv/kosko-charts/utils/getGithubRegistryImagePath";
import { EnvVar } from "kubernetes-models/v1";

const getManifests = async () => {
  const manifests = await create("recherche-entreprises-search", {
    config: {
      containerPort: 3000,
      subDomainPrefix: "search-",
    },
    deployment: {
      image: getGithubRegistryImagePath({
        name: "search",
        project: "recherche-entreprises",
      }),
    },
    env,
  });
  const deployment = getDeployment(manifests);

  addEnv({
    deployment,
    data: new EnvVar({
      name: "ELASTICSEARCH_INDEX_NAME",
      value: "search-entreprises",
    }),
  });

  return manifests;
};

export default getManifests;
