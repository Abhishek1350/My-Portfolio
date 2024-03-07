import {
  Hero,
  SkillsExperience,
  RecentWork,
  Testimonials,
  Contact,
  TextAppearAnimation,
  MotionDiv,
  PageLoader,
} from "@/components";
import styles from "./styles.module.css";
import { Box, Title, Container, Button } from "@mantine/core";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <Suspense fallback={<PageLoader />}>
          <Hero />
        </Suspense>
      </section>

      <section className={styles.skills}>
        <Box w="100%">
          <Title order={2} className={styles.title}>
            <TextAppearAnimation text="Skills and Experience" center={true} />
          </Title>
          <SkillsExperience />
        </Box>
      </section>

      <section className={styles.work}>
        <Container size="lg">
          <Title order={2} className={styles.title}>
            <TextAppearAnimation text="My Recent Work" center={true} />
          </Title>
          <RecentWork />
          <MotionDiv direction="up">
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
          </MotionDiv>
        </Container>
      </section>

      <section className={styles.testimonials}>
        <Container size="lg">
          <Title order={2} className={styles.title}>
            <TextAppearAnimation text="Few Nice Words" center={true} />
          </Title>
          <Testimonials />
        </Container>
      </section>

      <section className={styles.contact}>
        <Container size="lg">
          <Title order={2} className={styles.title}>
            <TextAppearAnimation text="Contact" center={true} />
          </Title>
          <Contact />
        </Container>
      </section>
    </main>
  );
}
