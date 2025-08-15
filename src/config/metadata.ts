import type { Metadata } from "next";

export const metaData: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_CURRENT_SITE_URL as string),
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "Abhishek Portfolio",
        title:
            "Abhishek Bhardwaj | Software Developer | React, Next.js, Nest.js in Himachal Pradesh",
        description:
            "Discover Abhishek Bhardwaj, a self-taught Full-Stack Developer from Himachal Pradesh, India. Masterfully crafting scalable web marvels with React, Next.js, Nest.js, Remix, and AI-driven innovations. Explore his portfolio showcasing expertise in Shopify apps, dynamic frontends, and robust backends using PostgreSQL, Strapi, Sanity, Supabase, and Appwrite.",
        images: [
            {
                url: "/og-image.jpg",
                alt: "Abhishek Bhardwaj | Software Developer | React, Next.js, Nest.js",
                height: 630,
                width: 1200,
            },
        ],
    },
    title:
        "Abhishek Bhardwaj | Software Developer | React, Next.js, Nest.js in Himachal Pradesh",
    description:
        "Discover Abhishek Bhardwaj, a self-taught Full-Stack Developer from Himachal Pradesh, India. Masterfully crafting scalable web marvels with React, Next.js, Nest.js, Remix, and AI-driven innovations. Explore his portfolio showcasing expertise in Shopify apps, dynamic frontends, and robust backends using PostgreSQL, Strapi, Sanity, Supabase, and Appwrite.",
    keywords:
        "Abhishek Bhardwaj, Full-Stack Developer, ReactJS Developer, NextJS Developer, NestJS Developer, Remix Developer, Shopify Apps, AI Innovation, Web Development, Portfolio, React developer, Next js developer, Nest js developer, Himachal Pradesh, India, PostgreSQL, Strapi, Sanity, Supabase, Appwrite, TailwindCSS",
    robots:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    authors: {
        name: "Abhishek Bhardwaj",
        url: "https://github.com/abhishek1350",
    },
};
