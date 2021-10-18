import env from "@kosko/env";
import { create } from "@socialgouv/kosko-charts/components/app";
import { getGithubRegistryImagePath } from "@socialgouv/kosko-charts/utils/getGithubRegistryImagePath";

const manifests = create("recherche-entreprises-api", {
  config: {
    containerPort: 3000,
    subDomainPrefix: "api-",
  },
  deployment: {
    image: getGithubRegistryImagePath({
      name: "api",
      project: "recherche-entreprises",
    }),
  },
  env,
});

export default manifests;
