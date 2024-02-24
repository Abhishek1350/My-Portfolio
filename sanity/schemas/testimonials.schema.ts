const schema = {
    name: "testimonials",
    title: "Testimonials",
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
            name: "position",
            title: "Position",
            type: "string",
        },
        {
            name: "company",
            title: "Company",
            type: "reference",
            to: [{ type: "experiences" }],
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
