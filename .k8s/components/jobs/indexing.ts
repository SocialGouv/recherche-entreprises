import env, { Environment } from "@kosko/env";
import { SealedSecret } from "@kubernetes-models/sealed-secrets/bitnami.com/v1alpha1/SealedSecret";
import gitlab from "@socialgouv/kosko-charts/environments/gitlab";
import { addInitContainer } from "@socialgouv/kosko-charts/utils/addInitContainer";
import { getHarborImagePath } from "@socialgouv/kosko-charts/utils/getHarborImagePath";
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
      "AgDGWiSE5kUv0Mv4Dot8KfbSGm5XVlyi4V9yLiMI97deZctFWRd2T31MtTUz/XgT4VlFH4NUhK+dQonLEILE2P9rs4MMDaY09cc3NZiDLB9GJoBcWnWsa02QV4Xykk8UthTHQPFC4g+0ElFU4UewbIc3Zc2ZqIk5Y803TnYkRuAF1bM1ZdpWGnm+yh7+lXnbRMmFo62vhPVB8lnl9Z/RVxhs1jx6xnbIFyTjvelM4/sySiyHZ0h74fL61DAvOcNBgCTd49RRBBzcAhp6a8KL45FL1eAYyOqS8vW5uNeFu59Cu9ByRruhyTELjpPtLesjsBUHiqmfBh09esKw+mdtMmfYxIsy+JGPS50N8GiNj+n0A5XXtLQkm9oT884r4LEQip35YHyenh20NmueHX8RGMOXRT05PWnbL70NtZHqUwzFdc21vdFhXAb/MVaMgqcKG4RPkRS+qljn+pQjJ8DkY0EqgWOCfSyjB+jKJ65peSqqORq+B8zTDgpv9ZaN+xSDsfi+PckPPJqKOjaTkQW/VdfwpT6ipOUpNgznUOGy7XN9vxAQR9P79n6KlIyMsme4hN7OHX5ko0xWQZcCyfHbSbT7JHY5UpmTv+c0NtyrV755FQN75HDFRhQYHtgLnhR9PuBCZ8Gvtg2T/Nr63GsTMC5e52bj2zIRlOUTrsvxEIYKQoBPILoueEIcMz64/UiMAZ9RwH308wRHOrZtch5gclzUQWZEgI5Vx2cJQ/zr9iqBaedg2v8GqvESeKw1e7pgXoLE6pFKJtQa7cMwQgmrBkkxrEfePcRDP4yAMVQaiM8DoqIjVg==",
    ELASTICSEARCH_API_KEY:
      "AgDE1F8SFMKtRpPd9BKozxXC5YcwVae1SRc+ECX/9EUhLSaqxGXenqVbtE2tj6kovFcru8sSMgPQZIOGDel4QIpwGC9HozNQWGXkEf9AABjulJ82hwlyo/22XOYodqAs3FuZc0tiodEK6+GUw9KKVf6I2P3Y55AzwfZNuar319LG1H0OmkvJbaXjkQwuELjBeU0OG1hPSf3LSIX4F6hc9JlunyDgWFT+vqe7FN+0Q/BmRgbY9SJ4ZqD+TZxzLfKCmWAtGFWW2eFf5jJDmuXp5A4QK+jSd1vonJGjFn16fEgA32tOnBxaA+7TpcBqVq/oOqYvBckuXlDUrBIXkfKRK/FqjvFCxtkhpzrYRe6FFntA6MFmnYvzhsUEoIOSrn3O8Unlaae//am/sukctTkqTum4IF0316k5UwUjcEsd/1qTFM84l3mcPBeU656t1B0sAaTK5JEPSOkJvz1nk9Ei1RUXPJCVTp3i64hia5OeWgEaTWUsP1udhMhC1eGSt0tf5QtNnnDlpASebmI7oubuSiOLveXg/+RcHNXTztrbc3xSNAUIML8GTXNbA4TJXorvZKdecvVbmtsbH7u+4awna7J+SuAysKNdWdTeMsT0uMdFA0o4fez+PQVXc9+IF0DqU0T8EDeLfz62663aW1R7rQ2KEjK/2Vvy8W6EUjXIdY1DEPv1BmHpI9xRJJ8P8sTucaXBmohjPJb1lXzh+/9AmeIRhy/mDJTnCox/UOfyRrpx+FcU/Vi6TvJvV8ab7JZbufOVmo1iEPnP3Wx3rcQ=",
  },
  preprod: {
    ELASTICSEARCH_URL:
      "AgB82d7LnDA/6RxRlks/7cRtmWuz6Ql1p4gCwdghu3X85Ek4FqSL6ui1tIBiuM1pZcaiwM6ZizsKA0ofq5iBafUwRQOzTFc3XAMy7XltrymG/QwBRmYKS4w4Ub1DPuYpVxEUC6Jngyex7OvhCKUK7pugjG6Q8FXO6i9iyVVEpKnAcSVLaUe+olmlOrO2RMjIK3mgKX/xOFT+2FYiN5/LJob+w/+p0hPlZaMsLrLOl/i5N4LuI5ckg+FawifD2MnN057fsLbwt0m63g7ZHvXtGT66tbTcQgpWfy5kLe2m7oIbzdk+oPoh4FS8PnyU6nMC8sOkC3v/GUMK91qCas01RBoyPRTTs11yX3gbYHti5Nc3zDt36YHPhrqfRQHQ8xONYkx5SkAylnDr1JoXyfrKDwZUBvLQ6Xh3gGI7qu909LxZ2ryWd9WRslpB1+8bOLN0tV20slAesGYFC/W6e5GT0AhwWqwJ9usGLf0dM7GE+IXJegIlconcM+2x/FW3RQ5XnK5kI/coiha5pxBkK0p8pbwmLnOwH5c2QoBD5xgLCZ3wleMcbTWdSynzm/LSYkWZzL15M3dy4m8c+qXc88LCbAHTZ2UaAH/XF7pcuMvOF33ZesjgaWLumFoUvhtaG1gZN97eU2/K1xLwo+x/vt06P6vUbU2Emj9cEziTaQqx1ZPUI4Hsp5ZNpbAGRsLMhCf7G7YvxZkpxh+7GAKvW1JmhF1DYgBapCen2bxQN/XK/pNniL89T0hiKSwh/Fo8yDOnqAGova3T1Nq6fLFcRYNxtKFVlsn5zsUgyVPCtyn+cUKIFw==",
    ELASTICSEARCH_API_KEY:
      "AgCWc+7OMggEJuNUXxL8CufezAMvJaT3svLkFi9KiKost/avFQNBoXDGixl7vERoCDVvDxnPlcn7m7MIjveP5oIfewhJzYQua9WmQrSMTab1soqUIjMHWj+2A8y0qSYg4s21w/X6bc+H0/O4+ax0QNVtm/MWc30vnCOF+uVibM2WcDkSY/FGE2bE7hcmQWeDbsmnRxDaZTY10ME2ycZpv9eAMoXshCQ98k4LFT9DM0D51az4BibLJjUtsW/vMn/FNKv9/teOGiCAFE/pfoyeZ4QN7ZsoFzCSHwj++Rd0hWScX8VCvbS5pgmfioz8SHmQFrxrN994CAPlr2Rw7mxfkzSETrDgzQVmzKD+j49PZL6cz77cCh9DGE70Pco91szWbsaUQ/lcWUTlFm39Z0Xmf6uV1eCSbyPcM3ogMx95Rjb3MnGa2zrt4OPLMMA2YfyqMtrrVTcq2aJ4fGvWAmVZHH3k2QMcPiYLGHQ8gnVsjI6LYGJEM27RVj99/ppZpoPWeims00fBHMclr3/4czfQCBKcr8GFouxfcKVYGJ4gRNdH0Qn5gZIPXOOiRKUVS0ik0zuT1Xu9u9kU6Df2RVOQawiIOy14+5RrMqt0li1PuCFZjRTqbsLGogOzJQfaXKOafNjxswUqXSn4gR3pVBmm0tPJx+9iFdSrkavvGBrQeSDrNzY5UjeZwIgz9hveUUe1dxARBK8iXu0Q8P6W+VnFActyQs0gnoc4Zzb3jJNfxgDWv1LF/MK22b5G2YcZ3bk5LSsGxP1KICJ0J1MMSL8=",
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

// base definition of the job
const jobSpec: IIoK8sApiCoreV1PodSpec = {
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
};

if (env.env === "prod") {
  jobSpec.nodeSelector = {
    "kubernetes.io/hostname": "aks-system0-38313369-vmss000001",
  };
}
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
    name: `update-index-${process.env.CI_COMMIT_SHORT_SHA}`,
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
