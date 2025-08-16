import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGraphql,
  SiPostgresql,
  SiSanity,
  SiStrapi,
  SiNestjs,
  SiCloudflare,
  SiRedux,
  SiSupabase,
  SiRemix,
  SiSass,
  SiBootstrap,
  SiContentful,
} from "react-icons/si";

export const socialLinks = [
  {
    id: 5,
    priority: 1,
    title: "GitHub",
    url: "https://github.com/Abhishek1350",
  },
  {
    id: 6,
    priority: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/abhishek-bhardwaj-76b9a721b/",
  },
  {
    id: 7,
    priority: 3,
    title: "Twitter",
    url: "https://twitter.com/Abhishek1350",
  },
  {
    id: 8,
    priority: 4,
    title: "Instagram",
    url: "https://www.instagram.com/imabhishek.dev/",
  },
];

export const personalInfo = {
  name: "Abhishek Bhardwaj",
  title: "Software Developer | React, Next.js, Nest.js",
  avatar: "/images/about/abhishek-bhardwaj.jpg",
  email: "hello@imabhishek.site",
  location: "Himachal Pradesh, India",
  description:
    "Self-taught Software Developer from Himachal Pradesh, India, crafting scalable and high-performance websites and applications. Skilled in React, Next.js, and NestJS, I started my journey during the lockdown and worked my way from complete beginner to building custom software solutions from scratch.",
};

export const heroSection = {
  personalInfo: personalInfo,
  socialLinks: socialLinks,
};

export const workExperience = [
  {
    company: "FAB Web Studio",
    position: "ReactJS Developer",
    period: "Jan 2024 - Present",
    shortDesc:
      "Started as a ReactJS developer and gradually expanded into full-stack responsibilities, including backend development and AI integration. Working both independently and within teams to deliver scalable web applications. My full responsibilities include:",
    bulletPoints: [
      "Gathering client requirements and delivering tailored frontend and backend solutions",
      "Integrating AI tools into internal projects to enhance automation and workflows",
      "Building and deploying custom Shopify apps using the Remix framework",
      "Developing responsive user interfaces with React.js, Next.js, and TypeScript",
      "Integrating headless CMS platforms such as Strapi, Sanity, Drupal, and WordPress",
      "Implementing backend systems using Node.js and NestJS with PostgreSQL",
      "Managing deployments on VPS and optimizing performance with Cloudflare and GraphQL",
    ],
  },
  {
    company: "Edvolve",
    position: "Software Engineer",
    period: "Aug 2022 - Jan 2024",
    shortDesc:
      "Joined as an intern and quickly transitioned into a full-time Software Engineer role. Worked closely with the founding team to build and launch key products from the ground up. My full responsibilities included:",
    bulletPoints: [
      "Built and launched two full-scale web applications using React",
      "Worked directly with the founders to define product roadmap and strategy",
      "Led frontend development and collaborated across teams in an agile environment",
      "Contributed to funding pitches by preparing live product demos and prototypes",
    ],
  },
];

export const techStack = [
  // === FRONTEND ===
  { name: "Next.js", icon: SiNextdotjs, color: "text-white", type: "Frontend" },
  { name: "React", icon: FaReact, color: "text-blue-400", type: "Frontend" },
  { name: "Remix", icon: SiRemix, color: "text-indigo-500", type: "Frontend" },
  {
    name: "Redux",
    icon: SiRedux,
    color: "text-purple-700",
    type: "Frontend",
  },

  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-500",
    type: "Frontend",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "text-cyan-400",
    type: "Frontend",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "text-purple-600",
    type: "Frontend",
  },
  { name: "SCSS", icon: SiSass, color: "text-pink-600", type: "Frontend" },

  // === BACKEND & DATABASES ===
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-500",
    type: "Backend & Databases",
  },
  {
    name: "NestJS",
    icon: SiNestjs,
    color: "text-red-500",
    type: "Backend & Databases",
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    color: "text-pink-400",
    type: "Backend & Databases",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    color: "text-green-400",
    type: "Backend & Databases",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-blue-400",
    type: "Backend & Databases",
  },

  // === CMS ===
  { name: "Sanity", icon: SiSanity, color: "text-red-500", type: "CMS" },
  { name: "Strapi", icon: SiStrapi, color: "text-blue-700", type: "CMS" },
  {
    name: "Contentful",
    icon: SiContentful,
    color: "text-blue-500",
    type: "CMS",
  },

  // === TOOLS & DEVOPS ===
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-500",
    type: "Tools & DevOps",
  },
  {
    name: "Cloudflare",
    icon: SiCloudflare,
    color: "text-orange-400",
    type: "Tools & DevOps",
  },
];
