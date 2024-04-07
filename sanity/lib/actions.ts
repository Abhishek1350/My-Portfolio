import { groq } from "next-sanity";
import { client } from "./client";
import { ISkill, IProject, ITestimonial } from "./types";

// Revalidate time in seconds (1 hour).
const revalidateTime = 3600;

// Fetching data for homepage.
export async function fetchData() {
    const query = groq`{
        "personalInfo": *[_type == "personalInfo"][0],
        "skills": *[_type == "skills"] | order(priority asc),
        "experience": *[_type == "experiences"] | order(startDate desc),
    }`;
    return client.fetch(query, { next: { revalidate: revalidateTime } });
}

export async function getPersonalInfo() {
    const query = groq`*[_type == "personalInfo"]`;
    return client.fetch(query);
}

export async function getSkills() {
    const query = groq`*[_type == "skills"] | order(priority asc)`;
    return client.fetch(query, { next: { revalidate: revalidateTime } });
}

export async function getExperience() {
    const query = groq`*[_type == "experiences"] | order(priority asc)`;
    return client.fetch(query, { next: { revalidate: revalidateTime } });
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
            const skills = await client.fetch(technologyQuery, { technologyIds, next: { revalidate: revalidateTime } });

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
    const testimonials = await client.fetch(query);

    const testimonialsWithCompany = await Promise.all(
        testimonials.map(async (testimonial: ITestimonial) => {
            const companyQuery = groq`*[_type == "experiences" && _id == $companyId]{
                companyName,
                companyUrl
            }`;
            const company = await client.fetch(companyQuery, { companyId: testimonial.company._ref, next: { revalidate: revalidateTime } });

            return {
                ...testimonial,
                companyName: company[0].companyName,
                companyUrl: company[0].companyUrl,
            };
        })
    );

    return testimonialsWithCompany;

}

export async function getSocialLinks() {
    const query = groq`*[_type == "socialLinks"] | order(priority asc)`;
    return client.fetch(query, { next: { revalidate: revalidateTime } });
}

export async function getBlogs() {
    const query = groq`*[_type == "blog"] | order(publishedAt desc)`;
    return client.fetch(query, { next: { revalidate: revalidateTime } });
}

export async function getBlogBySlug(slug: string) {
    const query = groq`*[_type == "blog" && slug.current == $slug]`;
    return client.fetch(query, { slug, next: { revalidate: revalidateTime } });
}
