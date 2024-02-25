import { groq } from "next-sanity";
import { client } from "./client";

export async function getPersonalInfo() {
    const query = groq`*[_type == "personalInfo"]`;
    return client.fetch(query);
}

export async function getSocialLinks() {
    const query = groq`*[_type == "socialLinks"] | order(priority asc)`;
    return client.fetch(query);
}

