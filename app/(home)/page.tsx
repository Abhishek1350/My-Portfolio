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
import { fetchData } from "@/sanity/lib/actions";
import { IPersonalInfo, ISkill, IExperience } from "@/sanity/lib/types";

export const dynamic = "force-dynamic";

export default async function Home() {
  const fullData = await fetchData();
  const heroData: IPersonalInfo = fullData.personalInfo;
  const skillsData: ISkill[] = fullData.skills;
  const experienceData: IExperience[] = fullData.experience;

  return (
    <main>
      <section className={styles.hero}>
        <Suspense fallback={<PageLoader />}>
          <Hero data={heroData} />
        </Suspense>
      </section>

      <section className={styles.skills} id="skills">
        <Box w="100%">
          <Title order={2} className={styles.title}>
            <TextAppearAnimation text="Skills and Experience" center={true} />
          </Title>
          <SkillsExperience skills={skillsData} experiences={experienceData} />
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
