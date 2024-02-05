const schema = {
    name: "skills",
    title: "Skills",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
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
    ],
};

export default schema;
