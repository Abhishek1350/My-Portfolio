const schema = {
    name: "siteInfo",
    title: "Site Information",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "url",
            title: "Url",
            type: "url",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "pagesMeataData",
            title: "Pages Meata Data",
            type: "object",
            fields: [
                {
                    title: "Home",
                    name: "home",
                    type: "object",
                    fields: [
                        {
                            title: "Title",
                            name: "title",
                            type: "string",
                        },
                        {
                            title: "Description",
                            name: "description",
                            type: "string",
                        },
                        {
                            name: "url",
                            title: "Url",
                            type: "url",
                            validation: (Rule: any) => Rule.required(),
                        }
                    ],
                },
                {
                    title: "About",
                    name: "about",
                    type: "object",
                    fields: [
                        {
                            title: "Title",
                            name: "title",
                            type: "string",
                        },
                        {
                            title: "Description",
                            name: "description",
                            type: "string",
                        },
                        {
                            name: "url",
                            title: "Url",
                            type: "url",
                            validation: (Rule: any) => Rule.required(),
                        }
                    ],
                },
                {
                    title: "Projects",
                    name: "projects",
                    type: "object",
                    fields: [
                        {
                            title: "Title",
                            name: "title",
                            type: "string",
                        },
                        {
                            title: "Description",
                            name: "description",
                            type: "string",
                        },
                        {
                            name: "url",
                            title: "Url",
                            type: "url",
                            validation: (Rule: any) => Rule.required(),
                        }
                    ],
                },
                {
                    title: "Blog",
                    name: "blog",
                    type: "object",
                    fields: [
                        {
                            title: "Title",
                            name: "title",
                            type: "string",
                        },
                        {
                            title: "Description",
                            name: "description",
                            type: "string",
                        },
                        {
                            name: "url",
                            title: "Url",
                            type: "url",
                            validation: (Rule: any) => Rule.required(),
                        }
                    ],
                },
                {
                    title: "Contact",
                    name: "contact",
                    type: "object",
                    fields: [
                        {
                            title: "Title",
                            name: "title",
                            type: "string",
                        },
                        {
                            title: "Description",
                            name: "description",
                            type: "string",
                        },
                        {
                            name: "url",
                            title: "Url",
                            type: "url",
                            validation: (Rule: any) => Rule.required(),
                        }
                    ],
                },
            ],
        },
    ],
};

export default schema;
