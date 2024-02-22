import { StaggerItem, BlogCard } from "@/components";
import { SimpleGrid } from "@mantine/core";
import { Container, Title } from "@mantine/core";
import styles from "./styles.module.css";

const data = [
    {
        image:
            "https://cdn.sanity.io/images/wpw9cxdm/production/07aa735a1af9e47db2c14f122ffd8ccc4bba70a5-1903x931.png",
        title: "Free Games Hub",
        description:
            "A collection of free games to play online. A collection of free games to play online. A collection of free games to play online. A collection of free games to play online",
        tag: "outstanding",
        minRead: "5 min read",
    },
    {
        image:
            "https://cdn.sanity.io/images/wpw9cxdm/production/07aa735a1af9e47db2c14f122ffd8ccc4bba70a5-1903x931.png",
        title: "Free Games Hub",
        description:
            "A collection of free games to play online. A collection of free games to play online. A collection of free games to play online. A collection of free games to play online",
        tag: "outstanding",
        minRead: "5 min read",
    },
    {
        image:
            "https://cdn.sanity.io/images/wpw9cxdm/production/07aa735a1af9e47db2c14f122ffd8ccc4bba70a5-1903x931.png",
        title: "Free Games Hub",
        description:
            "A collection of free games to play online. A collection of free games to play online. A collection of free games to play online. A collection of free games to play online",
        tag: "outstanding",
        minRead: "5 min read",
    },
];

export default function Blogs() {
    return (
        <main className={styles.section}>
            <Container size="lg">
                <Title order={2} className={styles.title}>
                    Blogs
                </Title>
                <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }} spacing={30} mt={50}>
                    {data.map((item, index) => {
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
