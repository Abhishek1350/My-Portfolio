const schema = {
    name: "personalInfo",
    title: "Personal Information",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "email",
            title: "Email",
            type: "string",
        },
        {
            name: "phoneNumber",
            title: "Phone Number",
            type: "string",
        },
        {
            name: "address",
            title: "Address",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "education",
            title: "Education",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "dateOfBirth",
            title: "Date of Birth",
            type: "date",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "languages",
            title: "Languages",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
        },
        {
            name: "position",
            title: "Position",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "oneLiner",
            title: "One Liner",
            type: "string",
        },
        {
            name: "slidingText",
            title: "Sliding Text",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
        },
        {
            name: "totalExperience",
            title: "Total Experience",
            type: "string",
        },
        {
            name: "resume",
            title: "Resume",
            type: "file",
            options: {
                accept: ".pdf"
            },
        },
        {
            name: "profleImage",
            title: "Profile Image",
            type: "image",
            validation: (Rule: any) => Rule.required(),
            options: {
                hotspot: true,
            },
        },
        {
            name: "setupImage",
            title: "Setup Image",
            type: "image",
        },
        {
            name: "moreInfo",
            title: "More Information",
            type: "text",
        },
        {
            name: "workingHours",
            title: "Working Hours",
            type: "string",
        }
    ],
};

export default schema;
