import { Hero, ExperienceSkills, Projects } from "@/components/index";
import { ModalProvider } from "@/context";

export default function page() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
      <Hero />
      <ExperienceSkills />
      <ModalProvider>
        <Projects />
      </ModalProvider>
    </main>
  );
}
