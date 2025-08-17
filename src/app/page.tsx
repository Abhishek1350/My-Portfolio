import {
  CallToAction,
  Certifications,
  FadeInUp,
  HeroSection,
  MySetup,
  Projects,
  TechnicalSkills,
  WorkExperience,
  Testimonials,
} from "@/components";

export default function Portfolio() {
  return (
    <main className="max-w-4xl mx-auto p-6 lg:p-8 bg-background text-foreground">
      <FadeInUp delay={0.2}>
        <HeroSection />
      </FadeInUp>

      <FadeInUp delay={0.6}>
        <MySetup />
      </FadeInUp>

      <FadeInUp delay={0.4}>
        <WorkExperience />
      </FadeInUp>

      <FadeInUp delay={0.4}>
        <TechnicalSkills />
      </FadeInUp>

      <FadeInUp delay={0.5}>
        <Projects />
      </FadeInUp>

      <FadeInUp delay={0.8}>
        <Certifications />
      </FadeInUp>

      <FadeInUp delay={1.0}>
        <Testimonials />
      </FadeInUp>

      <FadeInUp delay={1.4}>
        <CallToAction />
      </FadeInUp>
    </main>
  );
}
