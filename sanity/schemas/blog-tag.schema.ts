const schema = {
    name: "blogTags",
    type: "document",
    title: "Blog Tags",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name",
            validation: (Rule: any) => Rule.required(),
        },
    ],
};
export default schema;
