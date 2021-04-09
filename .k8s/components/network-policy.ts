import env from "@kosko/env";
import { NetworkPolicy } from "kubernetes-models/networking.k8s.io/v1/NetworkPolicy";

/**  Basic netpol that allow :
/*      - communication inside namespace
/*      - communication from ingress-controller
/*      - communication from monitoring
*/

export const create = (namespace: string): NetworkPolicy =>
  new NetworkPolicy({
    metadata: { name: "default", namespace },
    spec: {
      podSelector: {},
      policyTypes: ["Ingress"],
      ingress: [
        {
          from: [
            {
              namespaceSelector: {
                matchLabels: { "network-policy/namespace": namespace },
              },
            },
          ],
        },
        {
          from: [
            {
              namespaceSelector: {
                matchLabels: {
                  "network-policy/source": "ingress-controller",
                },
              },
            },
          ],
        },
        {
          from: [
            {
              namespaceSelector: {
                matchLabels: {
                  "network-policy/source": "monitoring",
                },
              },
            },
          ],
        },
      ],
    },
  });

const manifests = [];
if (env.env === "prod") {
  const manifest = create("");
  manifests.push(manifest);
}
export default manifests;
