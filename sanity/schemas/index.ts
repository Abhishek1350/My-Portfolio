import project from "./project.schema";
import blog from "./blog.schema";
import experience from "./experience.schema";
import skill from "./skill.schema";
import blogTag from "./blog-tag.schema";
import personalInfo from "./personal-info.schema";
import siteInfo from "./site-info.schema";

const schemas = [siteInfo, personalInfo, project, experience, skill, blogTag, blog,];

export default schemas;
