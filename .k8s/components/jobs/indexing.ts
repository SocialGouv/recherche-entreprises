import fs from "fs";
import path from "path";
import env, { Environment } from "@kosko/env";
import { Job } from "kubernetes-models/batch/v1/Job";
import { updateMetadata } from "@socialgouv/kosko-charts/utils/updateMetadata";
import { getHarborImagePath } from "@socialgouv/kosko-charts/utils/getHarborImagePath";
import { addInitContainer } from "@socialgouv/kosko-charts/utils/addInitContainer";
import { Container } from "kubernetes-models/v1/Container";
import { ConfigMap } from "kubernetes-models/_definitions/IoK8sApiCoreV1ConfigMap";
import { IIoK8sApiCoreV1PodSpec } from "kubernetes-models/api/core/v1/PodSpec";
import gitlab from "@socialgouv/kosko-charts/environments/gitlab";
import { SealedSecret } from "@kubernetes-models/sealed-secrets/bitnami.com/v1alpha1/SealedSecret";

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
      "AgDGWiSE5kUv0Mv4Dot8KfbSGm5XVlyi4V9yLiMI97deZctFWRd2T31MtTUz/XgT4VlFH4NUhK+dQonLEILE2P9rs4MMDaY09cc3NZiDLB9GJoBcWnWsa02QV4Xykk8UthTHQPFC4g+0ElFU4UewbIc3Zc2ZqIk5Y803TnYkRuAF1bM1ZdpWGnm+yh7+lXnbRMmFo62vhPVB8lnl9Z/RVxhs1jx6xnbIFyTjvelM4/sySiyHZ0h74fL61DAvOcNBgCTd49RRBBzcAhp6a8KL45FL1eAYyOqS8vW5uNeFu59Cu9ByRruhyTELjpPtLesjsBUHiqmfBh09esKw+mdtMmfYxIsy+JGPS50N8GiNj+n0A5XXtLQkm9oT884r4LEQip35YHyenh20NmueHX8RGMOXRT05PWnbL70NtZHqUwzFdc21vdFhXAb/MVaMgqcKG4RPkRS+qljn+pQjJ8DkY0EqgWOCfSyjB+jKJ65peSqqORq+B8zTDgpv9ZaN+xSDsfi+PckPPJqKOjaTkQW/VdfwpT6ipOUpNgznUOGy7XN9vxAQR9P79n6KlIyMsme4hN7OHX5ko0xWQZcCyfHbSbT7JHY5UpmTv+c0NtyrV755FQN75HDFRhQYHtgLnhR9PuBCZ8Gvtg2T/Nr63GsTMC5e52bj2zIRlOUTrsvxEIYKQoBPILoueEIcMz64/UiMAZ9RwH308wRHOrZtch5gclzUQWZEgI5Vx2cJQ/zr9iqBaedg2v8GqvESeKw1e7pgXoLE6pFKJtQa7cMwQgmrBkkxrEfePcRDP4yAMVQaiM8DoqIjVg==",
    ELASTICSEARCH_API_KEY:
      "AgDE1F8SFMKtRpPd9BKozxXC5YcwVae1SRc+ECX/9EUhLSaqxGXenqVbtE2tj6kovFcru8sSMgPQZIOGDel4QIpwGC9HozNQWGXkEf9AABjulJ82hwlyo/22XOYodqAs3FuZc0tiodEK6+GUw9KKVf6I2P3Y55AzwfZNuar319LG1H0OmkvJbaXjkQwuELjBeU0OG1hPSf3LSIX4F6hc9JlunyDgWFT+vqe7FN+0Q/BmRgbY9SJ4ZqD+TZxzLfKCmWAtGFWW2eFf5jJDmuXp5A4QK+jSd1vonJGjFn16fEgA32tOnBxaA+7TpcBqVq/oOqYvBckuXlDUrBIXkfKRK/FqjvFCxtkhpzrYRe6FFntA6MFmnYvzhsUEoIOSrn3O8Unlaae//am/sukctTkqTum4IF0316k5UwUjcEsd/1qTFM84l3mcPBeU656t1B0sAaTK5JEPSOkJvz1nk9Ei1RUXPJCVTp3i64hia5OeWgEaTWUsP1udhMhC1eGSt0tf5QtNnnDlpASebmI7oubuSiOLveXg/+RcHNXTztrbc3xSNAUIML8GTXNbA4TJXorvZKdecvVbmtsbH7u+4awna7J+SuAysKNdWdTeMsT0uMdFA0o4fez+PQVXc9+IF0DqU0T8EDeLfz62663aW1R7rQ2KEjK/2Vvy8W6EUjXIdY1DEPv1BmHpI9xRJJ8P8sTucaXBmohjPJb1lXzh+/9AmeIRhy/mDJTnCox/UOfyRrpx+FcU/Vi6TvJvV8ab7JZbufOVmo1iEPnP3Wx3rcQ=",
  },
  prod: {
    ELASTICSEARCH_URL: "AgAA5Us5pOmSUlvb9epsISSjTx1VWShFnwVmm3QO9a5gWOUyr6t9fbcw+TOjPY+sYicSpfX6lE7oY4GsHEpywKUJ7wVf/2D34t6r63lWU5Pxr8zhTYmcDXU0Tttp6wXLRpAXeGSI4seWLDDzoEypW4ZAvlVGU8l2xGAyS9XZjCx0qKRi9nbYnPdfCNyGrz2pZU+e+PX9jVViPn+RxoC8xgttUDbo/j8OSaE2bdSvsn4Vb4MZg/qT8R9A/kNimkGrlXV5/cUJtLILZMi4bopl3hH+uCHQdTYvxEhHcV9PQCxOZxftIPL+NdC7ekfsX6tFNM6C+2VzFo0vYyF/26ICxlPBosHTwnu4ec8CxMQDW+uIG28C5TL0t7DKVXajAm2gleCGm0hsuYOThd5aQ0/F+wJmPIntZlb3umEQEhaMEKqlaKkOIsHplpwEzRyRBrauyde/cNJGP1Qx+eq5oC05iXlrfG6Oz/6Z58ifIcZgzroLZF9vBqUTLZ5Tc+Yyu5tYBtR/pogfjD98Ke1fAhx7V/kEh/N0qILy5DmW80Vw6C13wfSAOI50wGIs3avWEEw4EM3VgSZHGW/ROh2cUh+GGSrgYZHYyFq9yt9kKf1Bgc7tjdV8cMvMrAMtnc9go2OeZbiKJaGCoCNFJVCw9eLTib1A6CjY7Ym5cAdVzfI1ogpxp9zXpOyP/s5kwz6nZhn0A98OEKUuS795gEZleRvP0VloHdXvWou+/5ZS8BrxFc/f472uIikR1cPzsIJ61ONhnpMdGlrSZTjNjwMf7NjjPaP9SeI/nQcSux5+1zFxEL5Nuw==",
    ELASTICSEARCH_API_KEY: "AgAdogAJY/WwsE35qBwz+KO4pQ1U1z5Qs7ZXny4kv5jqOBHiNd04o4B5EG2gAwCjQfXowb4ZUzRhaVEPOKhPCg8sJ/ME1dAramkoAA9FaFWwNpQSXvc0ffdvaMPF0ESwm0TMtZNHEalfT2BWXf3FVJM1jDLzTOdKX0SJ4/Wj0yOVcqK5d1S0h7O5nnzg/KlePl2UHe/t5pWxnQSry7uf5WvHhOGntcB5Kr8glyM200p7ApxVjGdPOwka9v7Id97k5Jy5yn0sQ0YMolTpEfhNfspkg8S2jwuP1MFhMTIqe3NTbVA1m8bSpgeIjbeKwuKGvRqxJDuCP5SPGs79C2/mZmp/j246VbcSH8PZT7Kn3BmlPSGXa0JkrGFR9hSJT2gFknKaz9k+go8guJ4mCZ6nM8OmnUaOP8M938TNiF9ourtiIQbsNNhhkHOJfiqG9mnYkU9DUBSvRKh/KH4Jv6d6ZLsZ30qHpD55sNiNpVQuCWH/01IwOhEAoZHbwMjMBmO5Ri3H7Mzw0ILROTFZHsKAzIhEqmfKEw0+wtTFVZNKid4kvNq2mwmRHmmqpA9vyFW+5hRKfYYrgVD8EgfyTEEyg6iKscVa3MLArPTF0FV3Xy+4408xi2WaZDZ+qI3q19QnmI1o49dGXqP/l6OdAvcgirj3Bc4f1SRsD+i/W9PCoSf9elEIng+OS3h7pDjShS1Q3f5txkoi8yridv/QDmgSCFxMPHrZNfIo5AGaBHZ4ReV4VJlQ1YzrDMtGgxPVlrEp1qInmgc4BXpBZ1Yzb4E="
  },
};

// return a sealed-secret manifest
const getSealedSecret = (
  env: string,
  values: Record<string, string>
): SealedSecret =>
  new SealedSecret({
    metadata: {
      name: "elastic-recherche-entreprises-write",
      annotations:
        (env === "dev" && {
          "sealedsecrets.bitnami.com/cluster-wide": "true",
        }) ||
        {},
    },
    spec: {
      encryptedData: secrets.dev,
      template: {
        metadata: {
          annotations:
            (env === "dev" && {
              "sealedsecrets.bitnami.com/cluster-wide": "true",
            }) ||
            {},
          name: "elastic-recherche-entreprises-write",
        },
        type: "Opaque",
      },
    },
  });

// create a sealed secret for the indexing job
const sealedSecretContext = env.env === "prod" ? "prod" : "dev";
const sealedSecret = getSealedSecret(
  sealedSecretContext,
  secrets[sealedSecretContext]
);

// base definition of the job
const jobSpec = {
  containers: [
    {
      name: "update-index",
      image: getHarborImagePath({ name: "recherche-entreprises-index" }),
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
      ],
      envFrom: [
        {
          secretRef: {
            name: "elastic-recherche-entreprises-write",
          },
        },
      ],
    },
  ],
  restartPolicy: "Never",
  volumes: [
    {
      name: "data",
      emptyDir: {},
    },
  ],
} as IIoK8sApiCoreV1PodSpec;

// script for the initContainer of the index image
const initContainerScript = `
apt-get update -y && apt-get install -y wget 

export DATA_DIR="/data"

cd /data

echo "running get-data.sh..."

/mnt/scripts/get-data.sh

pip3 install -r /mnt/scripts/requirements.txt

echo "running assemble_data.py..."

python3 /mnt/scripts/assemble_data.py $DATA_DIR/StockUniteLegale_utf8.zip  $DATA_DIR/geo/ $DATA_DIR/WEEZ.csv $DATA_DIR/assembly.csv
`;

// initContainer definition, run above script and store data in a temp mount
const initContainer = new Container({
  args: ["-c", initContainerScript],
  command: ["sh"],
  image: `python:3.9.4`,
  imagePullPolicy: "Always",
  name: `download-data`,
  volumeMounts: [
    {
      name: "data",
      mountPath: "/data",
    },
    {
      mountPath: "/mnt/scripts",
      name: "local-files",
    },
  ],
});

// add local files as volume to the initContainer
const localFiles = [
  path.join(__dirname, "../../../assembly/scripts/get-data.sh"),
  path.join(__dirname, "../../../assembly/src/assemble_data.py"),
  path.join(__dirname, "../../../assembly/requirements.txt"),
];

if (!jobSpec.volumes) {
  jobSpec.volumes = [];
}
jobSpec.volumes.push({
  configMap: {
    name: `config-map-files-${process.env.CI_COMMIT_SHORT_SHA}`,
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
    name: `config-map-files-${process.env.CI_COMMIT_SHORT_SHA}`,
  },
});

// create the final job
const job = new Job({
  metadata: {
    name: "update-index",
  },
  spec: {
    backoffLimit: 3,
    template: {
      spec: jobSpec,
    },
  },
});

const envParams = gitlab(process.env);

updateMetadata(configMap, {
  annotations: envParams.annotations ?? {},
  labels: envParams.labels ?? {},
  namespace: envParams.namespace,
});

updateMetadata(job, {
  annotations: envParams.annotations ?? {},
  labels: envParams.labels ?? {},
  namespace: envParams.namespace,
});

updateMetadata(sealedSecret, {
  annotations: envParams.annotations ?? {},
  labels: envParams.labels ?? {},
  namespace: envParams.namespace,
});

addInitContainer(job, initContainer);

manifests.push(sealedSecret);
manifests.push(configMap);
manifests.push(job);

export default manifests;
