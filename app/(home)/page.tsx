import { Hero, SkillsExperience, RecentWork, Testimonials, Contact, TextAppearAnimation } from "@/components";
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
            <TextAppearAnimation text='Skills and Experience' center={true} />
          </Title>
          <SkillsExperience />
        </Box>
      </section>

      <section className={styles.work}>
        <Container size="lg">
          <Title order={2} className={styles.title}>
            <TextAppearAnimation text='My Recent Work' center={true} />
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

      <section className={styles.testimonials}>
        <Container size="lg">
          <Title order={2} className={styles.title}>
            <TextAppearAnimation text='Few Nice Words' center={true} />
          </Title>
          <Testimonials />
        </Container>
      </section>

      <section className={styles.contact}>
        <Container size="lg">
          <Title order={2} className={styles.title}>
          <TextAppearAnimation text='Contact' center={true} />
          </Title>
          <Contact />
        </Container>
      </section>
    </main>
  );
}
