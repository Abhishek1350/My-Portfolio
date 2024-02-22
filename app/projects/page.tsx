import { RecentWork, TextAppearAnimation } from "@/components";
import { Container, Title } from "@mantine/core";
import styles from "./styles.module.css";

export default function Blogs() {
    return (
        <main className={styles.section}>
            <Container size="lg">
                <Title order={2} className={styles.title}>
                    <TextAppearAnimation text="Projects" center />
                </Title>
                <RecentWork />
            </Container>
        </main>
    );
}
