const schema = {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      title: "Url",
      name: "url",
      type: "string",
    },
    {
      title: "Github Url",
      name: "githubUrl",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule: any) => Rule.required(),
      Option: {
        hotspot: true,
      },
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "reference",
      to: [{ type: "skills" }],
    },
  ],
};

export default schema;
