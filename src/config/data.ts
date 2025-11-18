import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { FiCpu, FiHeadphones, FiMonitor } from "react-icons/fi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
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
  SiShopify,
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
  title: "Software Developer | Next.js · Remix · NestJS · React",
  avatar: "/images/about/abhishek-bhardwaj.webp",
  email: "hello@imabhishek.site",
  location: "Himachal Pradesh, India",
  description:
    "I build fast, maintainable web apps and custom Shopify apps that scale. I ship frontend, backend, and AI features that drive business metrics, engagement, and conversions. I believe in the power of code to turn ideas into reality, not just pixels.",
};

export const heroSection = {
  personalInfo: personalInfo,
  socialLinks: socialLinks,
};

export const workExperience = [
  {
    company: "FAB Web Studio",
    position: "Software Developer",
    period: "Jan 2024 - Present",
    shortDesc:
      "Joined as a React developer and now take ownership of all modern, high-complexity engineering work, advanced JavaScript frameworks, custom Shopify apps, AI integrations, DevOps, and full-stack delivery. I handle architecture, development, and deployment across multiple projects and serve as the go-to engineer for building modern, scalable systems. (Key highlights below.)",
    bulletPoints: [
      "Lead all modern stack projects: React, Next.js, Remix, NestJS, TypeScript, and GraphQL",
      "Architect and build custom Shopify applications using Remix and modern tooling",
      "Own full-stack delivery — database design, API layer, frontend UI, CI/CD, and deployment",
      "Integrate and manage headless CMS platforms like Strapi, Sanity, Drupal (headless), and WordPress",
      "Develop scalable backend systems with Node.js, NestJS, and PostgreSQL",
      "Design and integrate AI-driven tools, automation, and workflow enhancements",
      "Manage VPS deployments, maintain CI/CD pipelines, and optimize performance via Cloudflare, Nginx, and caching strategies",
      "Collaborate directly with clients and leadership on architecture, feature planning, and technical decision-making",
    ],
  },
  {
    company: "Edvolve",
    position: "Software Engineer",
    period: "Aug 2022 - Jan 2024",
    shortDesc:
      "Joined as an intern and quickly transitioned into a full-time Software Engineer role. Worked closely with the founding team to plan, build, and launch core products from the ground up. (Key highlights below.)",
    bulletPoints: [
      "Built and launched two full-scale web applications using React",
      "Collaborated directly with the founders on product roadmap and feature planning",
      "Led frontend development and coordinated with backend and design teams in an agile setup",
      "Created live demos and interactive prototypes for investor presentations and funding pitches",
    ],
  },
];

export const techStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-white", type: "Frontend" },
  { name: "React", icon: FaReact, color: "text-sky-400", type: "Frontend" },
  { name: "Remix", icon: SiRemix, color: "text-indigo-500", type: "Frontend" },
  { name: "Redux", icon: SiRedux, color: "text-purple-600", type: "Frontend" },
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

  { name: "Node.js", icon: FaNodeJs, color: "text-green-500", type: "Backend" },
  { name: "NestJS", icon: SiNestjs, color: "text-red-500", type: "Backend" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-400", type: "Backend" },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-blue-400",
    type: "Backend",
  },

  { name: "Sanity", icon: SiSanity, color: "text-red-500", type: "CMS" },
  { name: "Strapi", icon: SiStrapi, color: "text-indigo-600", type: "CMS" },
  { name: "Shopify", icon: SiShopify, color: "text-green-500", type: "CMS" },
  {
    name: "Supabase",
    icon: SiSupabase,
    color: "text-emerald-400",
    type: "Backend",
  },
  {
    name: "Cloudflare",
    icon: SiCloudflare,
    color: "text-orange-400",
    type: "Tools",
  },
];

export const projects = [
  {
    title: "FAB Web Studio",
    description:
      "Rebuilt FAB Web Studio’s old Drupal site into a modern, high-performance platform using Next.js, TypeScript, Strapi, and Tailwind CSS. I handled everything end-to-end — UI design, frontend, backend setup, CMS integration, and deployment. The site now runs on a fully dynamic CMS, with better SEO, faster performance, and an AI-powered chatbot that answers queries based on site content.",
    image: "/images/projects/fabwebstudio.webp",
    liveUrl: "https://fabwebstudio.com",
    techStack: techStack.filter((item) =>
      ["Next.js", "Strapi", "TypeScript", "Tailwind"].includes(item.name)
    ),
  },
  {
    title: "SnapLoom",
    description:
      "A free AI-powered image editor with tools for background removal, color adjustments, aspect ratio resizing, and image generation. Designed for creators who need quick, smart edits in the browser.",
    image: "/images/projects/snaploom.webp",
    liveUrl: "https://www.snaploom.space",
    techStack: techStack.filter((item) =>
      ["Next.js", "TypeScript", "Tailwind"].includes(item.name)
    ),
  },
  {
    title: "Free Games Hub",
    description:
      "A collection of free PC and browser games curated for quick access and smooth play. Built to provide a clean and engaging experience for gamers without ads or clutter.",
    image: "/images/projects/free-games-hub.webp",
    liveUrl: "https://www.freegameshub.xyz",
    githubUrl: "https://github.com/Abhishek1350/FreeGamesHub",
    techStack: techStack.filter((item) =>
      ["Next.js", "TypeScript", "Tailwind"].includes(item.name)
    ),
  },
  {
    title: "CoinEcho",
    description:
      "A real-time crypto dashboard that delivers live price updates, AI insights, and quick market analysis. Built for users who want fast and accurate information without complex interfaces.",
    image: "/images/projects/coin-echo.webp",
    liveUrl: "https://coinecho.pages.dev",
    techStack: techStack.filter((item) =>
      ["React", "TypeScript", "Supabase"].includes(item.name)
    ),
  },
  {
    title: "FreeAIHub",
    description:
      "A simple and fast directory of free AI tools for text generation, image creation, speech recognition, and more. Made to help developers and creators explore AI capabilities easily.",
    image: "/images/projects/free-ai-hub.webp",
    liveUrl: "https://www.freeaihub.cloud/",
    techStack: techStack.filter((item) =>
      ["Next.js", "TypeScript"].includes(item.name)
    ),
  },
];

export const setupSpecs = [
  {
    title: "RGB PC Build",
    subTitle:
      "Custom rig with 10C/16T, RTX 4060 and 32GB RAM for performance in dev & gaming.",
    icon: FiCpu,
  },
  {
    title: "Dual Monitor Setup",
    subTitle:
      "Lenovo 1080p + MSI 2K, 27” screens for perfect mix of clarity and productivity.",
    icon: FiMonitor,
  },
  {
    title: "Audio & Peripherals",
    subTitle:
      "Redragon speakers, Cosmic Byte keyboard & headphones, plus earbuds & neckband for Dolby audio and ANC.",
    icon: FiHeadphones,
  },
  {
    title: "Gaming Chair",
    subTitle:
      "Ergonomic comfort that keeps me going through late-night builds and long creative stretches.",
    icon: HiOutlineDesktopComputer,
  },
];

export const certifications = [
  {
    title: "Al Fluency: Framework & Foundations - Anthropic",
    image: "/images/certifications/ai-fluency.webp",
    url: "https://verify.skilljar.com/c/ekmscej8qr5j",
  },
  {
    title: "Subject Matter Expert - AWS",
    image: "/images/certifications/sme-aws.webp",
    url: "/images/certifications/sme-aws.webp",
  },
  {
    title: "Next.js - Vercel",
    image: "/images/certifications/vercel-next.webp",
    url: "https://nextjs.org/learn/certificate?course=dashboard-app&user=54220&certId=dashboard-app-54220-1746641465395",
  },
  {
    title: "Frontend Developer (React) - HackerRank",
    image: "/images/certifications/hacker-rank.webp",
    url: "https://www.hackerrank.com/certificates/0b0a9b79a4a1",
  },
  {
    title: "Fundamentals of AI and ML - AWS",
    image: "/images/certifications/ai-ml.webp",
    url: "/images/certifications/ai-ml.webp",
  },
  {
    title: "Model Context Protocol - Anthropic",
    image: "/images/certifications/mcp.webp",
    url: "https://verify.skilljar.com/c/9ecfwypeucvc",
  },
];

export const testimonials = [
  {
    name: "Vikshak P",
    company: "Edvolve",
    linkedIn: "https://www.linkedin.com/in/vikshak/",
    position: "Cofounder",
    avatar: "/images/testimonials/vikshak.webp",
    testimonial:
      "Abhishek worked with us and he was quite the problem solver. His ability to learn quickly and eagerness to learn new things was super helpful since we were a high velocity team and expected quick results. Would happily work with him again to develop good products, and recommend him to other employers looking for a fast learner in your team!",
  },
  {
    name: "Shwetank Singh",
    company: "Edvolve",
    linkedIn: "https://www.linkedin.com/in/singhshwetank/",
    position: "Technical Lead",
    avatar: "/images/testimonials/shwetank.webp",
    testimonial:
      "Abhishek is a hardworking, driven and dedicated person. He will be an asset wherever he goes.",
  },
];
