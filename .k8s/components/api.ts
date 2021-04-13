import env from "@kosko/env";
import { create } from "@socialgouv/kosko-charts/components/app";
import { getHarborImagePath } from "@socialgouv/kosko-charts/utils/getHarborImagePath";

const manifests = create("recherche-entreprises-api", {
  config: {
    containerPort: 3000,
    subDomainPrefix: "api-"
  },
  deployment: {
    image: getHarborImagePath({ name: "recherche-entreprises-api" })
  },
  env,
});

export default manifests;
