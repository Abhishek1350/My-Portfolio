import { StaggerItem, BlogCard, TextAppearAnimation } from "@/components";
import { SimpleGrid } from "@mantine/core";
import { Container, Title } from "@mantine/core";
import styles from "./styles.module.css";
import { getBlogs } from "@/sanity/lib/actions";
import { IBlog } from "@/sanity/lib/types";

export const revalidate = 3600;

export default async function Blogs() {
    const blogs : IBlog[] = await getBlogs();

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
