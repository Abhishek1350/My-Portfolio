const schema = {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule:any) => Rule.required(),
      Option :{
        hotspot: true,
      }
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule:any) => Rule.required(),
    },
  ],
};

export default schema;
