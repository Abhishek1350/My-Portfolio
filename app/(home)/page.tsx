import { Hero, SkillsExperience, RecentWork, Blogs } from "@/components";
import styles from "./styles.module.css";
import { Title, Container, Button } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <Hero />
      </section>
      <section className={styles.skills}>
        <Title order={2} className={styles.title}>
          Skills and Experience
        </Title>
        <SkillsExperience />
      </section>
      <section className={styles.work}>
        <Title order={2} className={styles.title}>
          My Recent Work
        </Title>
        <Container size="lg">
          <RecentWork />
        </Container>
        <Button
          component={Link}
          href="/projects"
          variant="outline"
          color="blue"
          size="lg"
          className={styles.workButton}
          mt={50}
        >
          View All
        </Button>
      </section>
      <section className={styles.blogs}>
        <Title order={2} className={styles.title}>
          Blogs
        </Title>
        <Container size="lg">
          <Blogs />
        </Container>
        <Button
          component={Link}
          href="/projects"
          variant="outline"
          color="blue"
          size="lg"
          className={styles.workButton}
          mt={50}
        >
          View All
        </Button>
      </section>
    </main>
  );
}
