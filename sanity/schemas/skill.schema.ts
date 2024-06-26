const schema = {
    name: "skills",
    title: "Skills",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "totalExperience",
            title: "Total Experience",
            type: "string",
        },
        {
            name: "link",
            title: "Link",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
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
