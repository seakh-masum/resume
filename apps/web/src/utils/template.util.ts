export type TemplateValues = Record<string, string>;

export const renderTemplate = (
  template: string,
  values: TemplateValues,
): string => {
  return template.replace(/\{\{(\w+)\}\}/g, (_match, key) => {
    return values[key] ?? "";
  });
};
