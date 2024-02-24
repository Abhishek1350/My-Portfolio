const schema = {
    name: "experiences",
    title: "Experiences",
    type: "document",
    fields: [
        {
            name: "companyName",
            title: "Company Name",
            type: "string",
        },
        {
            name: "companyLogo",
            title: "Company Logo",
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
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "startDate",
            title: "Start Date",
            type: "date",
        },
        {
            name: "endDate",
            title: "End Date",
            type: "date",
        },
        {
            name: "companyUrl",
            title: "Company Url",
            type: "url",
        },
    ],
};

export default schema;
