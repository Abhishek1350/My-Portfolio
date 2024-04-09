export interface IPersonalInfo {
    position: string;
    _rev: string;
    slidingText: string[];
    oneLiner: string;
    profleImage: {
        asset: {
            url: string;
        };
    };
    name: string;
    languages: string[];
    dateOfBirth: string;
    address: string;
    _type: string;
    totalExperience: number;
    email: string;
    education: string;
    moreInfo: string;
    phoneNumber: string;
    _id: string;
}

export interface ISkill {
    title: string;
    image: {
        asset: {
            url: string;
        };
    };
    link: string;
    _id: string;
    _type: string;
    priority: number;
    totalExperience: string;
    description: string;
}

export interface IExperience {
    companyName: string;
    companyLogo: {
        asset: {
            url: string;
        };
    };
    _id: string;
    _type: string;
    priority: number;
    position: string;
    description: string;
    startDate: string;
    endDate: string;
    companyUrl: string
}

export interface IProject {
    title: string;
    description: string;
    heroImage: {
        asset: {
            url: string;
        };
    };
    _id: string;
    _type: string;
    priority: number;
    githubUrl: string;
    liveUrl: string;
    technologies: string[];
}

export interface ITestimonial {
    title: string;
    description: string;
    company: {
        _ref: string
    };
    _id: string;
    position: string;
    priority: 1,
    image: {
        asset: {
            url: string;
        };
    };
    _type: 'testimonials'
    companyName: string;
    companyUrl: string;
}

export interface ISocialLink {
    _id: string;
    title: string;
    url: string;
}

export interface IBlog {
    _id: string;
    _type: string;
    title: string;
    metadesc: string;
    tags: string[];
    heroImage: {
        asset: {
            url: string;
        };
    };
    slug: {
        current: string;
    };
    minRead: string;
    content: any[];
}
