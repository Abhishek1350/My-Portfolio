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
      title: "Live Url",
      name: "liveUrl",
      type: "url",
    },
    {
      title: "Github Url",
      name: "githubUrl",
      type: "url",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      validation: (Rule: any) => Rule.required(),
      Option: {
        hotspot: true,
      },
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "skills" }],
        },
      ],
    },
    {
      name: "priority",
      title: "Priority",
      type: "number",
      validation: (Rule: any) => Rule.required().min(1).max(10),
    },
  ],
};

export default schema;
