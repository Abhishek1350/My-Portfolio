import { groq } from "next-sanity";
import { client } from "./client";
import { ISkill, IProject } from "./types";

// Fetching data for homepage.
export async function fetchData() {
    const query = groq`{
        "personalInfo": *[_type == "personalInfo"][0],
        "testimonials": *[_type == "testimonials"] | order(priority asc),
        "skills": *[_type == "skills"] | order(priority asc),
        "experience": *[_type == "experiences"] | order(startDate desc)
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
    const projectsQuery = groq`*[_type == "projects"] | order(priority asc)`;
    const projects = await client.fetch(projectsQuery);

    const projectsWithSkills = await Promise.all(
        projects.map(async (project: IProject) => {
            const technologyQuery = groq`*[_type == "skills" && _id in $technologyIds]{
                title
            }`;
            const technologyIds = project.technologies.map((tech: any) => tech._ref);
            const skills = await client.fetch(technologyQuery, { technologyIds });

            return {
                ...project,
                technologies: skills.map((skill: ISkill) => skill.title),
            };
        })
    );

    return projectsWithSkills;
}

export async function getTestimonials() {
    const query = groq`*[_type == "testimonials"] | order(priority asc)`;
    return client.fetch(query);
}

export async function getSocialLinks() {
    const query = groq`*[_type == "socialLinks"] | order(priority asc)`;
    return client.fetch(query);
}
