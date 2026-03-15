import { FaReact, FaNodeJs } from "react-icons/fa";
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
  SiReactrouter,
  SiPrisma,
  SiBootstrap,
  SiExpress,
  SiReactquery
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

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
      "Own full-stack delivery, database design, API layer, frontend UI, CI/CD, and deployment",
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
  { name: "React Router", icon: SiReactrouter, color: "text-red-500", type: "Frontend" },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-500",
    type: "Frontend",
  },

  { name: "Node.js", icon: FaNodeJs, color: "text-green-500", type: "Backend" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-500", type: "Backend" },
  { name: "NestJS", icon: SiNestjs, color: "text-red-500", type: "Backend" },
  { name: "Prisma", icon: SiPrisma, color: "text-green-400", type: "Backend" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-400", type: "Backend" },
  {
    name: "Supabase",
    icon: SiSupabase,
    color: "text-emerald-400",
    type: "Backend",
  },

  { name: "Strapi", icon: SiStrapi, color: "text-indigo-600", type: "CMS" },
  { name: "Shopify", icon: SiShopify, color: "text-green-500", type: "CMS" },
  { name: "Sanity", icon: SiSanity, color: "text-red-500", type: "CMS" },

  {
    name: "Cloudflare",
    icon: SiCloudflare,
    color: "text-orange-400",
    type: "Tools",
  },
  {
    name: "AWS",
    icon: FaAws,
    color: "text-[#ff9900]",
    type: "Tools",
  },
  { name: "Redux", icon: SiRedux, color: "text-purple-600", type: "Frontend" },
  { name: "React Query", icon: SiReactquery, color: "text-red-400", type: "Frontend" },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "text-cyan-400",
    type: "Frontend",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "text-purple-500",
    type: "Frontend",
  },
];

export const projects = [
  {
    title: "LootPulse",
    description:
      "A web application that aggregates free PC and browser games into a single place so users can quickly browse and launch games without searching across multiple sites. I rebuilt the project from the ground up as an improved version of FreeGamesHub with a cleaner interface, faster navigation, and a structured backend using Prisma. The platform focuses on quick discovery and smooth browsing while avoiding ads and unnecessary UI elements.",
    image: "/images/projects/lootpulse.webp",
    liveUrl: "https://lootpulse.online",
    techStack: techStack.filter((item) =>
      ["React Router", "Prisma", "TypeScript", "Cloudflare", "Tailwind"].includes(item.name)
    ),
  },
  {
    title: "TheZHub",
    description:
      "A browser based platform that provides practical tools for career planning, financial calculations, productivity, and everyday utilities. The goal of the project was to build a collection of lightweight tools that run instantly without accounts, subscriptions, or tracking. I focused on keeping the interface simple and responsive so students and early career users can access useful tools quickly from a single website.",
    image: "/images/projects/thezhub.webp",
    liveUrl: "https://thezhub.xyz/",
    techStack: techStack.filter((item) =>
      ["React Router", "TypeScript", "Tailwind"].includes(item.name)
    ),
  },
  {
    title: "FAB Web Studio",
    description:
      "Rebuilt the previous Drupal website of FAB Web Studio into a modern platform using Next.js, TypeScript, Strapi, and Tailwind CSS. I handled the full development process including UI design, frontend implementation, backend configuration, CMS setup, and deployment. The new system allows content to be managed through Strapi while improving page speed, SEO structure, and overall maintainability. The site also includes a chatbot that answers questions using the website’s content.",
    image: "/images/projects/fabwebstudio.webp",
    liveUrl: "https://fabwebstudio.com",
    techStack: techStack.filter((item) =>
      ["Next.js", "Strapi", "TypeScript", "Tailwind"].includes(item.name)
    ),
  },
  {
    title: "SnapLoom",
    description:
      "A browser based image editing tool that provides common editing features such as background removal, color adjustments, aspect ratio resizing, and AI image generation. The goal was to create a lightweight editor that runs entirely online so users can quickly edit images without installing software. The interface focuses on quick actions and minimal steps to perform common editing tasks.",
    image: "/images/projects/snaploom.webp",
    liveUrl: "https://snaploom.vercel.app",
    techStack: techStack.filter((item) =>
      ["Next.js", "TypeScript", "Tailwind"].includes(item.name)
    ),
  },
  {
    title: "CoinEcho",
    description:
      "A cryptocurrency dashboard that displays live market prices, recent changes, and short AI generated insights for different coins. The application fetches and updates market data in real time and presents it through a simplified interface so users can quickly check price movements and market information without navigating complex trading platforms.",
    image: "/images/projects/coin-echo.webp",
    liveUrl: "https://coinecho.pages.dev",
    techStack: techStack.filter((item) =>
      ["React", "React Query", "TypeScript", "Supabase"].includes(item.name)
    ),
  },
  {
    title: "FreeAIHub",
    description:
      "A website that collects and organizes free AI tools for tasks such as text generation, image creation, speech recognition, and other workflows. In addition to listing tools, the platform also allows users to run selected AI models directly on the site without creating accounts or paying for access. The goal of the project is to make AI tools easier to discover and experiment with from a single place.",
    image: "/images/projects/free-ai-hub.webp",
    liveUrl: "https://free-ai-hub.vercel.app",
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
    title: "AWS Cloud Practitioner",
    image: "/images/certifications/aws-cp.webp",
    url: "https://www.credly.com/badges/02e6448f-e33a-43d9-9003-fb8f65d6bac9/linked_in_profile",
  },
  {
    title: "Al Fluency: Framework & Foundations - Anthropic",
    image: "/images/certifications/ai-fluency.webp",
    url: "https://verify.skilljar.com/c/ekmscej8qr5j",
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
