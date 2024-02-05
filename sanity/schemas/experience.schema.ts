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
            name: "position",
            title: "Position",
            type: "string",
        },
        {
            name: "startDate",
            title: "Start Date",
            type: "string",
        },
        {
            name: "endDate",
            title: "End Date",
            type: "string",
        },
    ],
};

export default schema;
