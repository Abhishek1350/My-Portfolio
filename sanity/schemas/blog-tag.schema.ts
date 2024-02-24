const schema = {
    name: "blogTags",
    type: "document",
    title: "Blog Tags",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
            validation: (Rule: any) => Rule.required(),
        },
    ],
};
export default schema;
