import { Rule } from "sanity";

export default {
    name: "portfolioV4Data",
    title: "Portfolio V4 Data",
    type: "document",
    fields: [
        {
            name: "siteName",
            title: "Site Name",
            type: "string",
            validation: (rule: Rule) => rule.required(),
        },
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (rule: Rule) => rule.required(),
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
            validation: (rule: Rule) => rule.required(),
        },
        {
            name: "education",
            title: "Education",
            type: "string",
            validation: (rule: Rule) => rule.required(),
        },
        {
            name: "dateOfBirth",
            title: "Date of Birth",
            type: "date",
            validation: (rule: Rule) => rule.required(),
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
            validation: (rule: Rule) => rule.required(),
        },
        {
            name: "position",
            title: "Position",
            type: "string",
            validation: (rule: Rule) => rule.required(),
        },
        {
            name: "oneLiner",
            title: "One Liner",
            type: "string",
            validation: (rule: Rule) => rule.required(),
        },
        {
            name: "totalExperience",
            title: "Total Experience",
            type: "string",
            validation: (rule: Rule) => rule.required(),
        },
        {
            name: "resume",
            title: "Resume",
            type: "file",
            options: {
                accept: ".pdf",
            },
            validation: (rule: Rule) => rule.required(),
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
            validation: (rule: Rule) => rule.required(),
        },
        {
            name: "moreInfo",
            title: "More Information",
            type: "text",
            validation: (rule: Rule) => rule.required(),
        },
        {
            name: "workingHours",
            title: "Working Hours",
            type: "string",
            validation: (rule: Rule) => rule.required(),
        },
        {
            name: "socialLinks",
            title: "Social Links",
            type: "array",
            validation: (rule: Rule) => rule.required(),
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "name",
                            title: "Name",
                            type: "string",
                            validation: (rule: Rule) => rule.required(),
                        },
                        {
                            name: "url",
                            title: "URL",
                            type: "url",
                            validation: (rule: Rule) => rule.required(),
                        },
                        {
                            name: "priority",
                            title: "Priority",
                            type: "number",
                            validation: (rule: Rule) => rule.required(),
                        },
                    ],
                },
            ],
        },
        {
            name: "workExperience",
            title: "Work Experience",
            type: "array",
            validation: (rule: Rule) => rule.required(),
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "position",
                            title: "Position",
                            type: "string",
                            validation: (rule: Rule) => rule.required(),
                        },
                        {
                            name: "jobDescription",
                            title: "Job Description",
                            type: "text",
                            validation: (rule: Rule) => rule.required(),
                        },
                        {
                            name: "companyName",
                            title: "Company Name",
                            type: "string",
                            validation: (rule: Rule) => rule.required(),
                        },
                        {
                            name: "companyUrl",
                            title: "Company Url",
                            type: "url",
                            validation: (rule: Rule) => rule.required(),
                        },
                        {
                            name: "companyLogo",
                            title: "Company Logo",
                            type: "image",
                            validation: (rule: Rule) => rule.required(),
                        },
                        {
                            name: "startDate",
                            title: "Start Date",
                            type: "date",
                            validation: (rule: Rule) => rule.required(),
                        },
                        {
                            name: "endDate",
                            title: "End Date",
                            type: "date",
                        },
                    ],
                },
            ],
        },
        {
            name: "skills",
            title: "Skills",
            type: "array",
            validation: (rule: Rule) => rule.required(),
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "name",
                            title: "Name",
                            type: "string",
                            validation: (rule: Rule) => rule.required(),
                        },
                        {
                            name: "image",
                            title: "Image",
                            type: "image",
                            validation: (rule: Rule) => rule.required(),
                        },
                        {
                            name: "url",
                            title: "URL",
                            type: "url",
                        },
                    ],
                },
            ],
        },
        {
            name: "projects",
            title: "Projects",
            type: "array",
            validation: (rule: Rule) => rule.required(),
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "title",
                            title: "Title",
                            type: "string",
                            validation: (rule: Rule) => rule.required(),
                        },
                        {
                            name: "description",
                            title: "Description",
                            type: "text",
                            validation: (rule: Rule) => rule.required(),
                        },
                        {
                            name: "images",
                            title: "Images",
                            type: "array",
                            of: [
                                {
                                    type: "image",
                                    validation: (rule: Rule) => rule.required(),
                                },
                            ],
                            validation: (rule: Rule) => rule.required(),
                        },
                        {
                            name: "techStack",
                            title: "Tech Stack",
                            type: "array",
                            of: [
                                {
                                    type: "string",
                                    validation: (rule: Rule) => rule.required(),
                                },
                            ],
                            validation: (rule: Rule) => rule.required(),
                        },
                        {
                            name: "liveUrl",
                            title: "Live Url",
                            type: "url",
                        },
                        {
                            name: "gitUrl",
                            title: "Git Url",
                            type: "url",
                        },
                        {
                            name: "priority",
                            title: "Priority",
                            type: "number",
                            validation: (rule: Rule) => rule.required(),
                        },
                    ],
                },
            ],
        },
        {
            name: "testimonials",
            title: "Testimonials",
            type: "array",
            validation: (rule: Rule) => rule.required(),
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "authorName",
                            title: "Author Name",
                            type: "string",
                            validation: (rule: Rule) => rule.required(),
                        },
                        {
                            name: "authorImage",
                            title: "Author Image",
                            type: "image",
                            validation: (rule: Rule) => rule.required(),
                        },
                        {
                            name: "companyName",
                            title: "Company Name",
                            type: "string",
                            validation: (rule: Rule) => rule.required(),
                        },
                        {
                            name: "companyUrl",
                            title: "Company Url",
                            type: "string",
                            validation: (rule: Rule) => rule.required(),
                        },
                        {
                            name: "position",
                            title: "Position",
                            type: "string",
                            validation: (rule: Rule) => rule.required(),
                        },
                        {
                            name: "socialLink",
                            title: "Social Link",
                            type: "url",
                        },
                        {
                            name: "content",
                            title: "Content",
                            type: "text",
                            validation: (rule: Rule) => rule.required(),
                        },
                        {
                            name: "priority",
                            title: "Priority",
                            type: "number",
                            validation: (rule: Rule) => rule.required(),
                        },
                    ],
                },
            ],
        },
        {
            name: "certificates",
            title: "Certificates",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "title",
                            title: "Title",
                            type: "string",
                            validation: (rule: Rule) => rule.required(),
                        },
                        {
                            name: "image",
                            title: "Image",
                            type: "image",
                            validation: (rule: Rule) => rule.required(),
                        },
                        {
                            name: "url",
                            title: "URL",
                            type: "url",
                        }
                    ],
                },
            ],
        },
    ],
};
