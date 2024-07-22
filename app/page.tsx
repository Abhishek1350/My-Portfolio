import {
  Hero,
  ExperienceSkills,
  Projects,
  Testimonials,
  Contact,
} from "@/components/index";
import { ModalProvider } from "@/context";
import { getSanityData } from "@/lib/actions";

export default async function page() {
  const data = (await getSanityData());

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
      {
        data ? (
          <>
            <Hero data={data.personalInfo} />
            <ExperienceSkills experiences={data.workExperience} skills={data.skills} />
            <ModalProvider>
              <Projects />
            </ModalProvider>
            <Testimonials />
            <Contact />
          </>
        ) : null
      }
    </main>
  );
}
