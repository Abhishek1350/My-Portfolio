import { StaggerItem, BlogCard, TextAppearAnimation } from "@/components";
import { SimpleGrid } from "@mantine/core";
import { Container, Title } from "@mantine/core";
import styles from "./styles.module.css";
import { getBlogs } from "@/sanity/lib/actions";
import { IBlog } from "@/sanity/lib/types";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title:"Insights and Knowledge | Abhishek's Blog",
    description:
        "Dive into a treasure trove of insights, tutorials, and reflections curated by Abhishek Bhardwaj, a seasoned ReactJS Developer/NextJS developer. Explore topics ranging from ReactJS, NextJS, Redux, Material UI, TailwindCSS, and beyond. Discover valuable resources and stay updated with the latest trends in web development through engaging articles and thought-provoking discussions.",
};

export const revalidate = 3600;

export default async function Blogs() {
    const blogs: IBlog[] = await getBlogs();

    return (
        <main className={styles.section}>
            <Container size="lg">
                <Title order={2} className={styles.title}>
                    <TextAppearAnimation
                        text='Blogs'
                        center
                    />
                </Title>
                <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }} spacing={30} mt={50}>
                    {blogs.map((item, index) => {
                        return (
                            <StaggerItem index={index} key={index}>
                                <BlogCard item={item} />
                            </StaggerItem>
                        );
                    })}
                </SimpleGrid>
            </Container>
        </main>
    );
}
