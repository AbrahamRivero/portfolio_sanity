export default {
  name: "experiences",
  title: "Experiences",
  type: "document",
  fields: [
    {
      name: "initialYear",
      title: "Initial Year",
      type: "number",
    },
    {
      name: "lastYear",
      title: "Last Year",
      type: "number",
    },
    {
      name: "works",
      title: "Works",
      type: "array",
      of: [{ type: "reference", to: [{ type: "workExperience" }] }],
    },
  ],
};
