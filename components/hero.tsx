import { FaLocationArrow } from "react-icons/fa6";
import {
  MagicButton,
  Spotlight,
  MotionUp,
  Highlight,
} from "./animations/index";

export function Hero() {
  return (
    <div className="py-20 h-screen w-full">
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

      <MotionUp className="flex justify-center relative my-20 z-10 w-full">
        <div className="flex flex-col items-center justify-center w-full">

          <p className="uppercase md:tracking-wider text-[16px] mb-1 sm:text-2xl text-center font-bold text-blue-100">
            Hi, This is <Highlight>Abhishek Bhardwaj</Highlight>
          </p>

          <h1 className="text-3xl md:text-6xl text-neutral-700 dark:text-white max-w-4xl !leading-snug text-center mx-auto font-[900]">
            I'm a Professional
            <br />
            <Highlight>Software Developer</Highlight>
          </h1>

          <MotionUp delay={1.8}>
            <p className="text-center leading-5 md:tracking-wider font-semibold my-4 text-sm md:text-lg lg:text-2xl max-w-[500px] text-blue-100">
              Based in Himachal Pradesh, India,
              <br />
              Specialized in React and Next.js.
            </p>

            <div className="flex items-center gap-3 mt-5">
              <MagicButton
                title="Read More"
                icon={<FaLocationArrow />}
                position="right"
                className="w-fit text-lg"
              />

              <MagicButton
                title="Resume"
                icon={<FaLocationArrow />}
                position="right"
                className="w-fit text-lg"
              />
            </div>
          </MotionUp>
        </div>
      </MotionUp>
    </div>
  );
}
