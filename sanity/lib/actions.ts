import { groq } from "next-sanity";
import { client } from "./client";

// Fetching data for homepage.
export async function fetchData() {
    const query = groq`{
        "personalInfo": *[_type == "personalInfo"][0],
        "projects": *[_type == "projects"] | order(priority asc) [0...3],
        "testimonials": *[_type == "testimonials"] | order(priority asc),
        "skills": *[_type == "skills"] | order(priority asc),
        "experience": *[_type == "experiences"] | order(priority asc)
    }`;
    return client.fetch(query);
}

export async function getPersonalInfo() {
    const query = groq`*[_type == "personalInfo"]`;
    return client.fetch(query);
}

export async function getSkills() {
    const query = groq`*[_type == "skills"] | order(priority asc)`;
    return client.fetch(query);
}

export async function getExperience() {
    const query = groq`*[_type == "experiences"] | order(priority asc)`;
    return client.fetch(query);
}

export async function getProjects() {
    const query = groq`*[_type == "projects"] | order(priority asc)`;
    return client.fetch(query);
}

export async function getTestimonials() {
    const query = groq`*[_type == "testimonials"] | order(priority asc)`;
    return client.fetch(query);
}


export async function getSocialLinks() {
    const query = groq`*[_type == "socialLinks"] | order(priority asc)`;
    return client.fetch(query);
}

