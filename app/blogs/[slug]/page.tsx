import { TextAppearAnimation } from "@/components";
import { Container, Title } from "@mantine/core";
import styles from "./styles.module.css";
import { getBlogBySlug, getBlogs } from "@/sanity/lib/actions";
import { IBlog } from "@/sanity/lib/types";
import { PortableText, PortableTextReactComponents } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

export const revalidate = 3600;

export async function generateStaticParams() {
    const blogs: IBlog[] = await getBlogs();

    return blogs.map((post) => ({
        slug: post.slug.current,
    }));
}

export default async function Blog({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const blog: IBlog = await getBlogBySlug(slug);

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
