"use server";

import { groq } from "next-sanity";
import { client } from "@/sanity/lib";
import { CombinedData, SocialLink } from "./types";
import {
    EmailTemplateForUser,
    EmailTemplateForAdmin,
} from "@/components/email-templates";
import { Resend } from "resend";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    currentEmail: string;
}

export async function getSanityData(): Promise<CombinedData | null> {
    const query = groq`*[_type == "portfolioV4Data" && !(_id in path("drafts.**"))][0]{
         _id,
        _rev,
        _type,
        _createdAt,
        _updatedAt,
        "personalInfo":{
            siteName,
            name,
            email,
            address,
            position,
            "resume": resume.asset->url,
            "profileImage": profleImage.asset->url,
            "setupImage": setupImage.asset->url,
            moreInfo,
            workingHours
        },
        socialLinks[]{
           "title": name,
            url,
            priority
        },
        workExperience[]{
            position,
            jobDescription,
            companyName,
            companyUrl,
            "companyLogo": companyLogo.asset->url,
            startDate,
            endDate
        },
        skills[]{
            name,
            "image": image.asset->url,
            url
        },
        projects[]{
            title,
            description,
            "images": images[].asset->url,
            techStack,
            liveUrl,
            gitUrl,
            priority
        },
        testimonials[]{
            authorName,
            "authorImage": authorImage.asset->url,
            companyName,
            companyUrl,
            position,
            socialLink,
            content,
            priority
        },
        certificates[]{
            title,
            "image": image.asset->url,
            url
        }
    }`;
    try {
        const data = await client.fetch(query);
        return data;
    } catch (error) {
        console.error("Failed to fetch data from Sanity:", error);
        return null;
    }
}

export async function sendMail(
    formData: FormData
): Promise<{ success: boolean; message?: string }> {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const { error } = await resend.emails.send({
            from: formData.currentEmail,
            to: [formData.email],
            subject: "Contact Form Submission",
            react: EmailTemplateForUser({ ...formData }) as React.ReactElement,
        });

        if (error) throw new Error();

        resend.emails.send({
            from: formData.currentEmail,
            to: [formData.currentEmail],
            subject: "New Inquiry from portfolio",
            react: EmailTemplateForAdmin({ ...formData }) as React.ReactElement,
        });

        return { success: true };
    } catch (error) {
        return { success: false, message: "Something went wrong!" };
    }
}

export async function getSocialLinks(): Promise<SocialLink[] | null> {
    const query = groq`*[_type == "portfolioV4Data" && !(_id in path("drafts.**"))][0]{
        socialLinks[]{
           "title": name,
            url,
            priority
        },
    }`;
    try {
        const { socialLinks } = await client.fetch(query);
        return socialLinks;
    } catch (error) {
        console.error("Failed to fetch data from Sanity:", error);
        return null;
    }
}
