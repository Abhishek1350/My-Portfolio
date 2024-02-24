import project from "./project.schema";
import blog from "./blog.schema";
import experience from "./experience.schema";
import skill from "./skill.schema";
import blogTag from "./blog-tag.schema";
import personalInfo from "./personal-info.schema";
import testimonials from "./testimonials.schema";

const schemas = [
    personalInfo,
    project,
    experience,
    skill,
    testimonials,
    blogTag,
    blog,
];

export default schemas;
