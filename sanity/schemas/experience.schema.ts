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
            type: "date",
        },
        {
            name: "endDate",
            title: "End Date",
            type: "date",
        },
    ],
};

export default schema;
