import { SanityDocument } from "next-sanity";

export type SocialLink = {
    title: string;
    url: string;
    priority: number;
};

export type WorkExperience = {
    position: string;
    jobDescription: string;
    companyName: string;
    companyUrl: string;
    companyLogo: string;
    startDate: string
    endDate: string;
}

export type Skill = {
    name: string;
    image: string;
    url?: string;
}

export type Project = {
    title: string;
    description: string;
    images: string[];
    techStack: string[];
    liveUrl?: string;
    gitUrl?: string;
    priority: number;
}

export type Testimonial = {
    authorName: string;
    authorImage: string;
    companyName: string;
    companyUrl: string;
    position: string;
    socialLink?: string;
    content: string;
    priority: number;
}

export type PersonalInfo = {
    siteName: string;
    name: string;
    email: string;
    address: string;
    position: string;
    resume: string;
    profileImage: string;
    setupImage: string;
    moreInfo: string;
    workingHours: string;
}

export interface Certificate {
    title: string;
    image: string;
    url?: string;
}

export type CombinedData = SanityDocument & {
    personalInfo: PersonalInfo;
    socialLinks: SocialLinks[];
    workExperience: WorkExperience[];
    skills: Skill[];
    projects: Project[];
    testimonials: Testimonial[];
    certificates: Certificate[]
};
