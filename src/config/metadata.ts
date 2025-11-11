import type { Metadata } from "next";

export const metaData: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_CURRENT_SITE_URL as string),

    title:
        "Abhishek Bhardwaj | Software Developer | React.js · Next.js · Remix · NestJS · Shopify Apps | AI-Driven Web Solutions",
    description:
        "Abhishek Bhardwaj is a self-taught Full-Stack Developer from Himachal Pradesh, India, specializing in scalable, AI-driven web solutions using React.js, Next.js, Remix, NestJS, and Shopify Apps. Experienced in building modern applications with PostgreSQL, Strapi, Sanity, and Supabase.",

    keywords:
        "Abhishek Bhardwaj, Software Developer, Full Stack Developer, React Developer, Next.js Developer, Remix Developer, NestJS Developer, Shopify App Developer, AI Web Developer, Himachal Pradesh, India, TypeScript, PostgreSQL, Strapi, Sanity, Supabase, Appwrite, TailwindCSS, Cloudflare, GraphQL, Headless CMS, Remote Developer, Portfolio",

    authors: [
        { name: "Abhishek Bhardwaj", url: "https://github.com/abhishek1350" },
    ],

    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "Abhishek Bhardwaj Portfolio",
        url: process.env.NEXT_PUBLIC_CURRENT_SITE_URL,
        title:
            "Abhishek Bhardwaj | Software Developer | React.js · NextJS · Remix · NestJS · Shopify Apps",
        description:
            "Explore the portfolio of Abhishek Bhardwaj, a full-stack software developer from Himachal Pradesh, India. Building scalable, AI-powered web solutions with React.js, Next.js, Remix, NestJS, and Shopify Apps. Discover his projects and expertise in modern web technologies.",
        images: [
            {
                url: "/og-image.webp",
                width: 1200,
                height: 630,
                alt: "Abhishek Bhardwaj | Software Developer Portfolio",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Abhishek Bhardwaj | Software Developer | React · Next.js · Remix · NestJS · Shopify Apps",
        description:
            "Full-stack software developer from Himachal Pradesh, India. Building scalable and AI-driven web applications using React.js, Next.js, NestJS, Remix, and Shopify Apps.",
        creator: "@abhishek1350",
        images: ["/og-image.webp"],
    },

    robots:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",

    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },

    alternates: {
        canonical: process.env.NEXT_PUBLIC_CURRENT_SITE_URL,
    },
};
