import { Container, Title } from "@mantine/core"
import styles from "./styles.module.css";
import { TextAppearAnimation } from "@/components";

export default function ContactPage() {
    return (
        <main className={styles.section}>
            <Container size="lg">
                <Title order={2} className={styles.title}>
                    <TextAppearAnimation
                        text='Contact'
                        center
                    />
                </Title>
            </Container>
        </main>
    );
}