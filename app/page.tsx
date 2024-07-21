import {
  Hero,
  ExperienceSkills,
  Projects,
  Testimonials,
  Contact,
} from "@/components/index";
import { ModalProvider } from "@/context";
import { getSanityData } from "@/lib/actions"

export default async function page() {
  const data = await getSanityData();
  console.log(data)
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
      <Hero />
      <ExperienceSkills />
      <ModalProvider>
        <Projects />
      </ModalProvider>
      <Testimonials />
      <Contact />
    </main>
  );
}
