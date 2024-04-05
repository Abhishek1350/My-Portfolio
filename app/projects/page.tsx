import { RecentWork, TextAppearAnimation } from "@/components";
import { Container, Title } from "@mantine/core";
import styles from "./styles.module.css";
import { getProjects } from "@/sanity/lib/actions";
import { IProject } from "@/sanity/lib/types";

export default async function Projects() {
    const projects : IProject[] = await getProjects();

    return (
        <main className={styles.section}>
            <Container size="lg">
                <Title order={2} className={styles.title}>
                    <TextAppearAnimation text="Projects" center />
                </Title>
                <RecentWork projects={projects}/>
            </Container>
        </main>
    );
}
