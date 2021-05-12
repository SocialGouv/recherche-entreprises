import allCodesNaf from "@socialgouv/codes-naf";

const codesEntries: [string, string][] = allCodesNaf.map(({ id, label }) => [
  id,
  label,
]);

export const codesNaf = new Map(codesEntries);
