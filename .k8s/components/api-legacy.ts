import env from "@kosko/env";
import { create } from "@socialgouv/kosko-charts/components/app";
import { addEnv, getDeployment } from "@socialgouv/kosko-charts/utils";
import { getGithubRegistryImagePath } from "@socialgouv/kosko-charts/utils/getGithubRegistryImagePath";
import { EnvVar } from "kubernetes-models/v1";

const getManifests = async () => {
  const manifests = await create("recherche-entreprises-api", {
    config: {
      containerPort: 3000,
      subDomainPrefix: "api-",
    },
    deployment: {
      image:
        "harbor.fabrique.social.gouv.fr/cdtn/recherche-entreprises-api:1.5.8",
    },
    env,
  });

  return manifests;
};

export default getManifests;
