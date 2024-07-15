import { FaLocationArrow } from "react-icons/fa6";
import {
  MagicButton,
  Spotlight,
  MotionUp,
  Highlight,
} from "./animations/index";
import { Container } from "./container";
import Image from "next/image";

export function Hero() {
  return (
    <section>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="black"
        />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="black" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="#e4ecff" />

      <div
        className="h-full w-full dark:bg-black-100 bg-white
       absolute top-0 left-0 flex items-center justify-center dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <Container className="flex justify-center relative my-20 z-10 w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <MotionUp delay={0}>
            <p className="uppercase md:tracking-wider text-[16px] mb-1 sm:text-2xl text-center font-bold text-blue-100">
              Hi, This is <Highlight delay={1.8}>Abhishek Bhardwaj</Highlight>
            </p>
          </MotionUp>

          <MotionUp delay={0.3}>
            <h1 className="text-3xl md:text-6xl text-neutral-700 dark:text-blue-100  max-w-4xl !leading-snug text-center mx-auto font-[900]">
              I'm a Professional
              <br />
              <Highlight delay={1.8}>Software Developer</Highlight>
            </h1>
          </MotionUp>

          <MotionUp delay={0.6}>
            <p className="text-center leading-5 md:tracking-wider font-semibold my-4 text-sm md:text-lg lg:text-2xl max-w-[500px] text-white ">
              Based in Himachal Pradesh, India,
              <br />
              Specialized in React and Next.js.
            </p>
          </MotionUp>

          <MotionUp delay={0.9} className="flex items-center gap-3 mt-5">
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
          </MotionUp>
        </div>
      </Container>

      {/*  Open bg image in modal when click */}
      <Container className="my-12 lg:my-16 relative">
        <MotionUp delay={1.2}>
          <div
            className="p-20 rounded-lg cursor-pointer"
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,0.85) 0%, rgba(12,14,35,0.80) 100%), url('https://cdn.sanity.io/images/y178r8ab/production/4737240c5a75234b9edca2e6f795273abb0f55a8-2276x1707.jpg?fit=max&auto=format')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
              <span className="bg-slate-900 font-bold w-fit text-blue-100 rotate-90 p-2 px-5 text-xl rounded-md">
                ABOUT ME
              </span>
              <span className="h-36 w-[2px] bg-slate-900"></span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 overflow-hidden">
              <div className="order-2 lg:order-1 col-span-12  lg:col-span-8 px-3">
                <p className="font-bold mb-5 text-red-500 text-2xl uppercase">
                  My Journey
                </p>
                <p className="text-blue-100 text-lg">
                  Starting in June 2021 during the lockdown, I embarked on my
                  journey to become a software developer alone, without any
                  teacher or mentor. At that time, I had no prior knowledge of
                  programming. I seized the opportunity to learn something new
                  during the lockdown, and it turned out to be an incredible
                  journey. I have learned extensively from online resources,
                  without taking any formal courses. Now, I specialize in React
                  and Next.js and am capable of creating software independently.
                </p>
              </div>
              <div className="flex justify-center order-1 lg:order-2 col-span-12 lg:col-span-4">
                <Image
                  src="https://cdn.sanity.io/images/y178r8ab/production/98e49e7e5d2f0581919cc01b7816aff4b9bebd24-934x1073.jpg?fit=max&auto=format"
                  width={300}
                  height={800}
                  alt="Abhishek"
                  className="rounded-lg aspect-square overflow-hidden w-[95%]"
                />
              </div>
            </div>
          </div>
        </MotionUp>
      </Container>
    </section>
  );
}
