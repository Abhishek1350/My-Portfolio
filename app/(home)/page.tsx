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
import { fetchData, getFileUrl } from "@/sanity/lib/actions";
import { IPersonalInfo, ISkill, IExperience } from "@/sanity/lib/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Abhishek Bhardwaj | Expert Software Developer based in Himachal Pradesh, India",
  description:
    "Explore the portfolio of Abhishek Bhardwaj based in Himachal Pradesh, a skilled ReactJS Developer/NextJS Developer. Discover expertise in ReactJS, NextJS, Redux, Material UI, and TailwindCSS showcased through innovative web development projects.",
};

export const revalidate = 3600;

export default async function Home() {
  const fullData = await fetchData();
  const heroData: IPersonalInfo = fullData.personalInfo;
  const skillsData: ISkill[] = fullData.skills;
  const experienceData: IExperience[] = fullData.experience;
  const resumeUrl = await getFileUrl(heroData.resume);

  return (
    <main>
      <section className={styles.hero}>
        <Suspense fallback={<PageLoader />}>
          <Hero data={heroData} resumeUrl={resumeUrl} />
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
              <Link href="/projects" style={{ textDecoration: "none" }}>
                <UnstyledButton className={styles.workBtn}>
                  View All
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
