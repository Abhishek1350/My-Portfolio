import { FaLocationArrow } from "react-icons/fa6";
import { MagicButton, Spotlight, MotionUp } from "./animations/index";

export function Hero() {
  return (
    <div className="pb-20 pt-36 h-screen w-full">
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      <div
        className="h-screen w-full dark:bg-black-100 bg-white
       absolute top-0 left-0 flex items-center justify-center dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <MotionUp className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl max-w-[700px]">
            Hi! I'm Abhishek,
          </p>

          <MagicButton
            title="Show our work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
      </MotionUp>
    </div>
  );
}
