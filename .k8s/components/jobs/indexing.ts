import env from "@kosko/env";
import { SealedSecret } from "@kubernetes-models/sealed-secrets/bitnami.com/v1alpha1/SealedSecret";
import github from "@socialgouv/kosko-charts/environments/github";
import { addInitContainer } from "@socialgouv/kosko-charts/utils/addInitContainer";
import { getGithubRegistryImagePath } from "@socialgouv/kosko-charts/utils/getGithubRegistryImagePath";
import { updateMetadata } from "@socialgouv/kosko-charts/utils/updateMetadata";
import fs from "fs";
import { IIoK8sApiCoreV1PodSpec } from "kubernetes-models/api/core/v1/PodSpec";
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "kubernetes-models/apimachinery/pkg/apis/meta/v1/ObjectMeta";
import { Job } from "kubernetes-models/batch/v1/Job";
import { ConfigMap } from "kubernetes-models/v1/ConfigMap";
import { Container } from "kubernetes-models/v1/Container";
import path from "path";

/**
 *
 * This creates a kubernetes job that fetch datasets and publish it to some Elastic search
 *
 * An initContainer is used to fetch and assemble the fresh data it before starting the indexation process in a pod
 *
 */

const baseName = (localFile: string) => localFile.split("/").reverse()[0];
const read = (filePath: string) => fs.readFileSync(filePath).toString();

const manifests = [];

// these are write secrets to some ES cluster for the indexing job
const secrets = {
  dev: {
    ELASTICSEARCH_URL:
      "AgCxK1MqqVkCOHvMjjcieUsj1uE/ATUzAfYTYVEMqcWFxTnugOaYlXB2mTuZtzdjXNvINREzDynnVRBghPIJvrJm59vPgexC5FyQptdPf2XwQAG6n0yMLWAEBM+O8ieO1D6vBu6BYuq4QYoItq+SMTE6APNX+p6wi4/LP04cR8p8bVKNxckPMfyVfQGhUSTD+2gC5ow2x1Mx67odqqP3E8eK9tm5tU6ltzOpKqJKITUQIqTQbSKFr8p77DE4IrdbPn8MpvdP+VrT+ztF4thPkpVpuYWy9rABdQKeEuNdN2AuvmPeJs/2B80iApIgtWWQjV/iG+WlLGMohvWDZVsBGuBuYGzhjJlr5w8OljwKDihb2cG1M/Ot/LM1xRuCC85wvqH0oMhnnP/3DZts5aYAN+qjAezOkPT9kjT+gu0WoQB+E5r9ITcYYHYbJw/YSxS2z86Ul0amRRW4ovAWT5c/nFDZU6i74I8YyVh8oOtrieZgNF4ajJcIr5YpjT2LICKoZR0KExrQ4V30zZJ+wZcvd8W3e/KCmKsFxloTkLq/sjEiFQoe6ffYTQhSUXZynqrdUKZsdoSleprfctlJtf3rzxt5hZIpcLulXrYk7pPPiHkTcV3Zc4zkN3BFE1A9vsgTvh6xTXlvUekJHHMXU3t8ZyZD8vvemxv0FE8G33XWQF2DEkmyc3gXMlfPDLho4fHv0h0iId0c9klFkOpmp8REFWJyuRQjq+hOHvfoCSu1ymsCwA0CMAguJoX1XEhn0aA9QIgf0VyBe/cVJwu/GfW74UBi6x5feqzFovYIUXbDP6kW",
    ELASTICSEARCH_API_KEY:
      "AgAsUJ5yUgpoX1pB9QDIXVdtDx/Xu89kKRjOUUTd4ido6Sytxn8M60gP79xwKMbtAYRQFXiQSTFC8ETZzmGpVRjmP5raxMV8c6RAd7opm9otT3HPDjfiIilZW3tyaVcvrYRV3lSAGav1UlGogVX9VyAiYfzgPLdZvQbIg/gECrMQTaP33o1TfmlLFiIUTT4dsbeCf34whHUk4mRK+1tQ+HItG5Dy5WbUAA9ud0ArNjGEV5cJsFlE5rBAzDKYY8QeID6OdBf1DqVRusYJLeu+vUj9Ib/jjpG+DMxwxa9nJNL4SJvazbww0U6MRc65J3Kwqr4tENO/92cSAPf2uhUWPXLPefETx1YqJiELjIlhBYWe/EbFzXnXsmfmnPIYRKFS2cm45RcXN9wr5k0JV0F0aC418ufKh0SLctKKzdqPTTi6vGgY0tbx686sATPmUg3ZLeoINbXMBR5qAj2oJn4IpZELVKrGOcQkEJxFF+spLz+Bi5FOXV+RdUEboGn0NvWaRL6mV5mgYmE1QAGzmcffGK0Myqo0Wv+FedecK4u+QVXNjfkz7OjGMXG6V04vroGXXUsput1s5aoQBqBdk6SQio4wRnqNNTzm3LO6MxQHK/WHFfU6tzGCEsIz7mHWIN9hdv+WJmx1fxM272ZMttdM5FO1TrkhvxC2pU/MM+cdtFfv8Pzeig9I//XEbUVL2Ywj/qFxoVZluabP03mQwQ71+SGHofB2pnNfO9AltIAE7pXjX8wRsB4JbJomu395ZYwSfCG+ze7uViaz9ovBttc=",
  },
  preprod: {
    ELASTICSEARCH_URL:
      "AgCxK1MqqVkCOHvMjjcieUsj1uE/ATUzAfYTYVEMqcWFxTnugOaYlXB2mTuZtzdjXNvINREzDynnVRBghPIJvrJm59vPgexC5FyQptdPf2XwQAG6n0yMLWAEBM+O8ieO1D6vBu6BYuq4QYoItq+SMTE6APNX+p6wi4/LP04cR8p8bVKNxckPMfyVfQGhUSTD+2gC5ow2x1Mx67odqqP3E8eK9tm5tU6ltzOpKqJKITUQIqTQbSKFr8p77DE4IrdbPn8MpvdP+VrT+ztF4thPkpVpuYWy9rABdQKeEuNdN2AuvmPeJs/2B80iApIgtWWQjV/iG+WlLGMohvWDZVsBGuBuYGzhjJlr5w8OljwKDihb2cG1M/Ot/LM1xRuCC85wvqH0oMhnnP/3DZts5aYAN+qjAezOkPT9kjT+gu0WoQB+E5r9ITcYYHYbJw/YSxS2z86Ul0amRRW4ovAWT5c/nFDZU6i74I8YyVh8oOtrieZgNF4ajJcIr5YpjT2LICKoZR0KExrQ4V30zZJ+wZcvd8W3e/KCmKsFxloTkLq/sjEiFQoe6ffYTQhSUXZynqrdUKZsdoSleprfctlJtf3rzxt5hZIpcLulXrYk7pPPiHkTcV3Zc4zkN3BFE1A9vsgTvh6xTXlvUekJHHMXU3t8ZyZD8vvemxv0FE8G33XWQF2DEkmyc3gXMlfPDLho4fHv0h0iId0c9klFkOpmp8REFWJyuRQjq+hOHvfoCSu1ymsCwA0CMAguJoX1XEhn0aA9QIgf0VyBe/cVJwu/GfW74UBi6x5feqzFovYIUXbDP6kW",
    ELASTICSEARCH_API_KEY:
      "AgAsUJ5yUgpoX1pB9QDIXVdtDx/Xu89kKRjOUUTd4ido6Sytxn8M60gP79xwKMbtAYRQFXiQSTFC8ETZzmGpVRjmP5raxMV8c6RAd7opm9otT3HPDjfiIilZW3tyaVcvrYRV3lSAGav1UlGogVX9VyAiYfzgPLdZvQbIg/gECrMQTaP33o1TfmlLFiIUTT4dsbeCf34whHUk4mRK+1tQ+HItG5Dy5WbUAA9ud0ArNjGEV5cJsFlE5rBAzDKYY8QeID6OdBf1DqVRusYJLeu+vUj9Ib/jjpG+DMxwxa9nJNL4SJvazbww0U6MRc65J3Kwqr4tENO/92cSAPf2uhUWPXLPefETx1YqJiELjIlhBYWe/EbFzXnXsmfmnPIYRKFS2cm45RcXN9wr5k0JV0F0aC418ufKh0SLctKKzdqPTTi6vGgY0tbx686sATPmUg3ZLeoINbXMBR5qAj2oJn4IpZELVKrGOcQkEJxFF+spLz+Bi5FOXV+RdUEboGn0NvWaRL6mV5mgYmE1QAGzmcffGK0Myqo0Wv+FedecK4u+QVXNjfkz7OjGMXG6V04vroGXXUsput1s5aoQBqBdk6SQio4wRnqNNTzm3LO6MxQHK/WHFfU6tzGCEsIz7mHWIN9hdv+WJmx1fxM272ZMttdM5FO1TrkhvxC2pU/MM+cdtFfv8Pzeig9I//XEbUVL2Ywj/qFxoVZluabP03mQwQ71+SGHofB2pnNfO9AltIAE7pXjX8wRsB4JbJomu395ZYwSfCG+ze7uViaz9ovBttc=",
  },
  prod: {
    ELASTICSEARCH_URL:
      "AgA0evdMnmx3uImqSzGIHorhP2zdv0hFREYZt0FLKi9Eg389OmU1f8CKgpOJp5LPedSAghc8HEd//YeqYRvhQZhfclkw15FZJX7xxz3H75wYJMuNxnLPz8cEyruuA2NrqVoCNuf8p06aI1hfhjNlIKnPjewR14hK5tdKVmsRc1bfPOygUhslbp+aDCbyCFAVFamhaHYHYKdBKZ4B3V+pgLfQvJl2Xfnm3ChXO9Y7ptnI7IJjyzpResdQwasAppc6onvOrGAdms4wW0TZQOsrRV/3JwFHwbqwiX8DzdwkvLlK37HwV7XddiHOQsa3Z+ONI5y9Uhbw2+3ynMi0h8dVOxHmjeq4iPVBqSTWgRfqomz7MR+MSQfNwaE/D20qlt1fzrFvNezc07XxwYxogUS9QFVe8vgXbeoOFmgUA25pKUsOVgjs+ulA5uH7fMv9JhF5H93250FE+/VcHS1wtUAZw67w9GndnpEgs/kmqR9juD4qVEslrEb36OmsZi4hkgNKh8kK2GybTTaTw4I5xSuWu0mpQqZR3i5M8biT/B0YStW1EkajX02obUyQKSJk8VjLwXIFQ726kse5sMh8Ste+z1lKEIfq6jOKZZ7sUiSTwuLuGTmEqy5mdcmkyeCgp4paYOyzKHhYDNXaoZkKguZP9DuOY+44g4uch9Uj3hGvZb+4dV41FGIJ3PB0YZbbxgHF3UA6iHGkZcITwxhn4lJADU7yJyQcrziDXccKa1yiGe9BOOjGn2+WOLF0lrLsA6Uxk70sEiwZygYJQCJGN6KsHPz7Resz6aF/YTY3K+m65VeI4g==",
    ELASTICSEARCH_API_KEY:
      "AgAw0rLyRSJJHgwBKDwtTfrBJtMTZ2jaQ07AZArXOsCazbaGOCfLtdtoB3tmlZw+fPYkLpCcWEDypjjt2qvoaMTQJp/LZcyXG69ccPLTj5wDzTSiYsIIewBNN6d0A71lUdbtAFgdyFPrxjYIDuj9SVtQqRjv6Fd/gmEnAsGh2szYRfeRIse8zqI/ICWuBpfidZ7lLDzJbTnCK4AYkan2zWqk4Xp5X8owyAaKc3gkG3CKDiR0Re+cAdfpQ2VJ7KX22vnn8jtu98i98vwGtG2iJngX7oLWXgYxR+ptkKdSt54lwzRCCfRgEI32Rl0JNHcY8QpYq+SVlxpMpNNLk5rp7NscR6AeU+YVQH0R+ZidEPC3Ys/ELIZ2wLd/++DKVRFQfgSoC1c0DkBy+u49Ye/5eV0m8p0FW+ch12ylVynnWvbIfhYsRQx2c9xsI7KN3ysUcktWjDech2qI4zpkTUyV+KhWqVpO2LjbJoD6TFOVgd/CoFGeNB7Yjds0ccerXk1z8lirdm2irSJ+B1szZBzGCVXGwqnPu/KNebaPdwk+Dy4MH3fFe9ktwHcSJuiwBsnx38FuFHI0qWDTk/StOzprYD16WoAihB+LCVrOvJEJTnAWf5lCs2QStRiD5gFAHMtdW/Z8Q29QgXI8s+19YZ3Wz6JmJYgUKayYR/7qZqV5eD5aVQR/BphmZiH2SJh4zJ5lFk3r6a02/OwlwqIVfCYFmm9thFHsbJr5A3698128+KRrB/WLTKV1AvmPWWcDoj7HbFi+tYobtwNQpCQWw28=",
  },
};

// return a sealed-secret manifest
const getSealedSecret = (
  values: Record<string, string>,
  annotations?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta["annotations"]
): SealedSecret =>
  new SealedSecret({
    metadata: {
      name: "elastic-recherche-entreprises-write",
      annotations,
    },
    spec: {
      encryptedData: values,
      template: {
        metadata: {
          annotations,
          name: "elastic-recherche-entreprises-write",
        },
        type: "Opaque",
      },
    },
  });

// create a sealed secret for the indexing job
const sealedSecretSecrets =
  env.env === "prod" ? "prod" : env.env === "preprod" ? "preprod" : "dev";
const sealedSecret = getSealedSecret(
  secrets[sealedSecretSecrets],
  (env.env === "dev" && {
    "sealedsecrets.bitnami.com/cluster-wide": "true",
  }) ||
    {}
);

const envParams = github(process.env);

// base definition of the job
const jobSpec: IIoK8sApiCoreV1PodSpec = {
  containers: [
    {
      name: "update-index",
      image: getGithubRegistryImagePath({
        name: "index",
        project: "recherche-entreprises",
      }),
      volumeMounts: [
        {
          name: "data",
          mountPath: "/data",
        },
      ],
      env: [
        {
          name: "ASSEMBLY_FILE",
          value: "/data/assembly.csv",
        },
        {
          name: "ELASTICSEARCH_INDEX_NAME",
          value: "search-entreprises",
        },
      ],
      envFrom: [
        {
          secretRef: {
            name: "elastic-recherche-entreprises-write",
          },
        },
      ],
      resources: {
        limits: {
          cpu: "4",
          memory: "5Gi",
        },
        requests: {
          cpu: "2",
          memory: "2Gi",
        },
      },
    },
  ],
  restartPolicy: "Never",
  volumes: [
    {
      name: "data",
      emptyDir: {},
    },
  ],
};

// initContainer definition, run above script and store data in a temp mount
const initContainer = new Container({
  args: ["/mnt/scripts/sqlite.sh"],
  command: ["sh"],
  image: `ubuntu:18.04`,
  imagePullPolicy: "Always",
  name: `download-build-data`,
  env: [
    {
      name: "DATA_DIR",
      value: "/mnt/scripts/data",
    },
  ],
  resources: {
    limits: {
      cpu: "4",
      memory: "2Gi",
    },
    requests: {
      cpu: "2",
      memory: "1Gi",
    },
  },
  volumeMounts: [
    {
      name: "data",
      mountPath: "/mnt/scripts/data",
    },
    {
      mountPath: "/mnt/scripts",
      name: "local-files",
    },
  ],
});

// add local files as volume to the initContainer
const localFiles = [
  path.join(__dirname, "../../../sqlite.sh"),
  path.join(__dirname, "../../../import.sql"),
  path.join(__dirname, "../../../export.sql"),
];

if (!jobSpec.volumes) {
  jobSpec.volumes = [];
}
jobSpec.volumes.push({
  configMap: {
    name: `config-map-files-${process.env.GITHUB_SHA}`,
    defaultMode: 0o777,
  },
  name: "local-files",
});

// files are stored in a configMap
const configMap = new ConfigMap({
  data: localFiles.reduce(
    (files, localFile) => ({
      ...files,
      [baseName(localFile)]: read(localFile),
    }),
    {}
  ),
  metadata: {
    name: `config-map-files-${process.env.GITHUB_SHA}`,
  },
});

// create the final job
const job = new Job({
  metadata: {
    name: `update-index-${process.env.GITHUB_SHA}`,
  },
  spec: {
    backoffLimit: 3,
    template: {
      spec: jobSpec,
    },
  },
});

updateMetadata(configMap, {
  annotations: envParams.metadata.annotations ?? {},
  labels: envParams.metadata.labels ?? {},
  namespace: envParams.metadata.namespace,
});

updateMetadata(job, {
  annotations: envParams.metadata.annotations ?? {},
  labels: envParams.metadata.labels ?? {},
  namespace: envParams.metadata.namespace,
});

updateMetadata(sealedSecret, {
  annotations: envParams.metadata.annotations ?? {},
  labels: envParams.metadata.labels ?? {},
  namespace: envParams.metadata.namespace,
});

addInitContainer(job, initContainer);

manifests.push(sealedSecret);
manifests.push(configMap);
manifests.push(job);

export default manifests;
