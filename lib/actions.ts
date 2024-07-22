"use server";

import { groq } from "next-sanity";
import { client } from "@/sanity/lib";
import { CombinedData } from "./types";

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
