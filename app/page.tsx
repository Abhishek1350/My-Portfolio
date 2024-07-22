import {
  Hero,
  ExperienceSkills,
  Projects,
  Testimonials,
  Contact,
} from "@/components/index";
import { ModalProvider } from "@/context";
import { getSanityData } from "@/lib/actions";
import { backupData } from "@/data/backup";

export default async function page() {
  const data = (await getSanityData()) ?? backupData;
  
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
      <Hero data={data.personalInfo}/>
      <ExperienceSkills />
      <ModalProvider>
        <Projects />
      </ModalProvider>
      <Testimonials />
      <Contact />
    </main>
  );
}
