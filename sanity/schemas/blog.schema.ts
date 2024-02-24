const schema = {
    name: "blogs",
    type: "document",
    title: "Blogs",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "metadesc",
            type: "string",
            title: "Meta Description",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [
                {
                    type: "reference",
                    to: [{ type: "blogTags" }],
                },
            ],
        },
        {
            title: "Hero Image",
            name: "heroImage",
            type: "image",
            options: {
                hotspot: true, // <-- Defaults to false
            },
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 200, // will be ignored if slugify is set
                slugify: (input: any) =>
                    input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
            },
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            validation: (Rule: any) => Rule.required(),
            of: [
                {
                    type: "block",
                },
                {
                    type: "image",
                    fields: [
                        {
                            type: "text",
                            name: "alt",
                            title: "Alternative text",
                            description: `Some of your visitors cannot see images, 
                      be they blind, color-blind, low-sighted; 
                      alternative text is of great help for those 
                      people that can rely on it to have a good idea of 
                      what\'s on your page.`,
                            options: {
                                isHighlighted: true,
                            },
                        },
                    ],
                },
            ],
        },
        {
            name: "minRead",
            type: "string",
            title: "Minutes To Read",
            validation: (Rule: any) => Rule.required(),
        },
    ],
};
export default schema;
