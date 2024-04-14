import { groq } from "next-sanity";
import { client } from "./client";
import { ISkill, IProject, ITestimonial } from "./types";

// Fetching data for homepage.
export async function fetchData() {
    const query = groq`{
        "personalInfo": *[_type == "personalInfo"][0],
        "skills": *[_type == "skills"] | order(priority asc),
        "experience": *[_type == "experiences"] | order(startDate desc),
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
    const testimonials = await client.fetch(query);

    const testimonialsWithCompany = await Promise.all(
        testimonials.map(async (testimonial: ITestimonial) => {
            const companyQuery = groq`*[_type == "experiences" && _id == $companyId]{
                companyName,
                companyUrl
            }`;
            const company = await client.fetch(companyQuery, {
                companyId: testimonial.company._ref,
            });

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
    return client.fetch(query);
}

export async function getBlogs() {
    const query = groq`*[_type == "blogs"]{
        _id,
        title,
        metadesc,
        heroImage,
        slug,
        tags,
        minRead
    } | order(publishedAt desc)`;
    const blogs = await client.fetch(query);

    const blogsWithTags = await Promise.all(
        blogs.map(async (blog: any) => {
            const tagsQuery = groq`*[_type == "blogTags" && _id in $tagIds]{
                title
            }`;
            const tagIds = blog.tags.map((tag: any) => tag._ref);
            const tags = await client.fetch(tagsQuery, { tagIds });

            return {
                ...blog,
                tags: tags.map((tag: any) => tag.title),
            };
        })
    );

    return blogsWithTags;
}

export async function getBlogBySlug(slug: string) {
    const query = groq`*[slug.current == $slug][0]{
        title,
        metadesc,
        heroImage,
        tags,
        content
     }`
    const blog = await client.fetch(query, { slug });

    if(!blog) return null;
   
    const tagsQuery = groq`*[_type == "blogTags" && _id in $tagIds]{
        title
    }`;

    const tagIds = blog.tags.map((tag: any) => tag._ref);

    const tags = await client.fetch(tagsQuery, { tagIds });

    return {
        ...blog,
        tags: tags.map((tag: any) => tag.title),
    };
}

export async function getBlogSlugs() {
    const query = groq`*[_type == "blogs"]{
        "slug": slug.current
    }`;
    const blogs = await client.fetch(query);
    return blogs;
}

export async function getContactPageData() {
    const socialLinks = await getSocialLinks();
    const contactDetailsQuery = groq`*[_type == "personalInfo"][0]{
        email,
        phoneNumber,
        address,
        workingHours
    }`;
    const contactDetails = await client.fetch(contactDetailsQuery);
    return {
        socialLinks,
        contactDetails,
    };
}
