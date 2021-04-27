import allCodesNaf from "@socialgouv/codes-naf";

const formatCodeNaf = (code: string) => code.replace(".", "") + "Z";

const codesEntries: [string, string][] = allCodesNaf.map(({ id, label }) => [
  formatCodeNaf(id),
  label,
]);

export const codesNaf = new Map(codesEntries);
