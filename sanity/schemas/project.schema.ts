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
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "skills" }],
        }
      ], 
      
    },
  ],
};

export default schema;
