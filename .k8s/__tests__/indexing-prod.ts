//

import { getEnvManifests } from "@socialgouv/kosko-charts/testing";
import { project } from "@socialgouv/kosko-charts/testing/fake/github-actions.env";

jest.setTimeout(1000 * 60);
test("kosko generate --dev", async () => {
  expect(
    await getEnvManifests("prod", "jobs/indexing", {
      ...project("recherche-entreprises").preprod,
      RANCHER_PROJECT_ID: "c-bd7z2:p-wbfnt",
    })
  ).toMatchSnapshot();
});
