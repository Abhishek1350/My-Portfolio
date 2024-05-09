import { TextAppearAnimation } from "@/components";
import { Container, Title } from "@mantine/core";
import styles from "./styles.module.css";
import { getBlogBySlug, getBlogSlugs } from "@/sanity/lib/actions";
import { IBlog } from "@/sanity/lib/types";
import { PortableText, PortableTextReactComponents } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const { slug } = params;

    const blog: IBlog = await getBlogBySlug(slug);

    return {
        title: `${blog?.title}| Abhishek's Blog`,
        description: blog?.metadesc,
        openGraph: {
            type: "website",
            locale: "en_US",
            title:`${blog?.title}| Abhishek's Blog`,
            description: blog?.metadesc,
            images: [
                {
                    url: urlForImage(blog.heroImage.asset),
                    alt: blog?.title ?? "Abhishek's Blog",
                },
            ],
        },
    };
}

export const revalidate = 3600;

export async function generateStaticParams() {
    return await getBlogSlugs();
}

export default async function Blog({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const blog: IBlog = await getBlogBySlug(slug);

    if (!blog) {
        redirect("/404");
    }

    const myPortableTextComponents: Partial<PortableTextReactComponents> = {
        types: {
            image: ({ value }) => {
                return (
                    <Image
                        src={urlForImage(value.asset)}
                        alt={value.alt ?? "Abhishek's Blog"}
                        className={styles.image}
                        layout="responsive"
                        width={300}
                        height={300}
                    />
                );
            },
        },
    };

    return (
        <main className={styles.section}>
            <Container size="lg">
                <div className={styles.header}>
                    <Title order={2} className={styles.title}>
                        <TextAppearAnimation text={blog.title} center />
                    </Title>
                    <Image
                        src={urlForImage(blog.heroImage.asset)}
                        alt={urlForImage(blog.heroImage.asset) ?? "Abhishek's Blog"}
                        className={styles.image}
                        layout="responsive"
                        width={300}
                        height={300}
                    />
                </div>
                <div className={styles.portableText}>
                    <PortableText
                        value={blog.content}
                        components={myPortableTextComponents}
                    />
                </div>
            </Container>
        </main>
    );
}
