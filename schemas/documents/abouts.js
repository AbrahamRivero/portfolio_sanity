const fieldsetOptions = { options: { collapsible: true, collapsed: true } };

export default {
  name: "abouts",
  title: "Abouts",
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
      description: "The title of this about",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
      description: "The description for this about",
    },
    {
      title: "Title (Spanish)",
      name: "locale_es_title",
      type: "string",
      description: "The title of this about",
      fieldsets: "locale_es",
    },
    {
      title: "Description (Spanish)",
      name: "locale_es_description",
      type: "string",
      description: "The description for this about",
      fieldsets: "locale_es",
    },
    {
      name: "imgUrl",
      title: "ImgUrl",
      type: "image",
      description: "The image of this about",
      options: {
        hotspot: true,
      },
    },
  ],
};
