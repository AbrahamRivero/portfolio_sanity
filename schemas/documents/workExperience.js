const fieldsetOptions = { options: { collapsible: true, collapsed: true } };

export default {
  name: "workExperience",
  title: "Work Experience",
  type: "document",
  fieldsets: [
    {
      name: "locale_es",
      title: "Spanish language overrides",
      ...fieldsetOptions,
    },
  ],
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      description: "The name for this work experience",
    },
    {
      title: "Name (Spanish)",
      name: "locale_es_name",
      type: "string",
      description: "The name for this work experience",
      fieldsets: "locale_es",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
  ],
};
