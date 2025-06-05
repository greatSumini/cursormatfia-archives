export const CATEGORY_RULES = "Rules";
export const CATEGORY_PROMPTS = "Prompts";
export const CATEGORY_LIBRARIES = "Libraries";

export const CATEGORY_OPTIONS = [
  CATEGORY_RULES,
  CATEGORY_PROMPTS,
  CATEGORY_LIBRARIES,
] as const;

export type CategoryOption = (typeof CATEGORY_OPTIONS)[number];
