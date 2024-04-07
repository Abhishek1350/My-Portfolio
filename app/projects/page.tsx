import { TextAppearAnimation, ProjectCard, StaggerItem  } from "@/components";
import { Container, Title, SimpleGrid } from "@mantine/core";
import styles from "./styles.module.css";
import { getProjects } from "@/sanity/lib/actions";
import { IProject } from "@/sanity/lib/types";

export const revalidate = 3600;

export default async function Projects() {
    const projects: IProject[] = await getProjects();

    return (
        <main className={styles.section}>
            <Container size="lg">
                <Title order={2} className={styles.title}>
                    <TextAppearAnimation text="Projects" center />
                </Title>
                <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }} spacing={30} mt={50}>
                    {projects.map((item, index) => {
                        return (
                            <StaggerItem index={index} key={item._id}>
                                <ProjectCard item={item} />
                            </StaggerItem>
                        );
                    })}
                </SimpleGrid>
            </Container>
        </main>
    );
}
