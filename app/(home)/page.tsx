import { Hero, SkillsExperience, RecentWork, Contact } from "@/components";
import styles from "./styles.module.css";
import { Box, Title, Container, Button } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <Hero />
      </section>
      <section className={styles.skills}>
        <Box w="100%">
          <Title order={2} className={styles.title}>
            Skills and Experience
          </Title>
          <SkillsExperience />
        </Box>
      </section>
      <section className={styles.work}>
        <Container size="lg">
          <Title order={2} className={styles.title}>
            My Recent Work
          </Title>
          <RecentWork />
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
        </Container>

      </section>
      {/* <section className={styles.blogs}>
        <Container size="lg">
          <Title order={2} className={styles.title}>
            Blogs
          </Title>
          <Blogs />
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
        </Container>
      </section> */}
      <section className={styles.contact}>
        <Container size="lg">
          <Title order={2} className={styles.title}>
            Contact
          </Title>
          <Contact />
        </Container>
      </section>
    </main>
  );
}
