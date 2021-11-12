import env from "@kosko/env";
import { create } from "@socialgouv/kosko-charts/components/app";
import { getGithubRegistryImagePath } from "@socialgouv/kosko-charts/utils/getGithubRegistryImagePath";

const getManifests = async () => {
  const manifests = await create("recherche-entreprises-front", {
    deployment: {
      image: getGithubRegistryImagePath({
        name: "front",
        project: "recherche-entreprises",
      }),
    },
    env,
  });
  return manifests;
};

export default getManifests;
