import env from "@kosko/env";
import { create } from "@socialgouv/kosko-charts/components/app";

const getManifests = async () => {
  const manifests = await create("recherche-entreprises-api", {
    config: {
      containerPort: 3000,
      subDomainPrefix: "api-legacy-",
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
