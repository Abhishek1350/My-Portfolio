const schema = {
    name: "socialLinks",
    title: "Social Links",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "url",
            title: "URL",
            type: "url",
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
