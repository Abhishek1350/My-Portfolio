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
import { Box, Title, Container, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import { Suspense } from "react";
import { fetchData } from "@/sanity/lib/actions";
import { IPersonalInfo, ISkill, IExperience } from "@/sanity/lib/types";

export const revalidate = 3600;

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
            <Box mt={50}>
              <Link href="/projects" style={{textDecoration:"none"}}>
                <UnstyledButton className={styles.workBtn}>
                  <strong>View All</strong>
                  <div className={styles.containerStars}>
                    <div className={styles.stars}></div>
                  </div>

                  <div className={styles.glow}>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                  </div>
                </UnstyledButton>
              </Link>
            </Box>
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
          <Contact currentEmail={heroData?.email} />
        </Container>
      </section>
    </main>
  );
}
