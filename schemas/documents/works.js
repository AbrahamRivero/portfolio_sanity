const fieldsetOptions = { options: { collapsible: true, collapsed: true } };

export default {
  name: "works",
  title: "Works",
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
      title: "Title",
      name: "title",
      type: "string",
      description: "The title for this work",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
      description: "The description for this work",
    },
    {
      title: "Title (Spanish)",
      name: "locale_es_title",
      type: "string",
      description: "The title for this work",
      fieldsets: "locale_es",
    },
    {
      title: "Description (Spanish)",
      name: "locale_es_description",
      type: "string",
      description: "The description for this work",
      fieldsets: "locale_es",
    },
    {
      name: "imgUrl",
      title: "ImageUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tag",
          type: "string",
          fieldsets: "locale_es",
        },
      ],
    },
  ],
};
