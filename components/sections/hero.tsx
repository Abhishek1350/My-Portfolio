import { FaLocationArrow, FaDownload } from "react-icons/fa6";
import {
  MagicButton,
  Spotlight,
  MotionUp,
  Highlight,
} from "../animations";
import { Container } from "../container";
import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-20">
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="black"
      />
      <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="black" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="#e4ecff" />

      <div
        className="h-[100vh] w-full dark:bg-black-100 bg-white
       absolute top-0 left-0 flex items-center justify-center dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <Container className="flex justify-center relative z-10 w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <MotionUp delay={0}>
            <h1 className="text-3xl  md:text-6xl text-neutral-700 dark:text-blue-100 !leading-snug text-center mx-auto font-[900]">
              Hi, I'm Abhishek, a Self Taught
              <br />
              <Highlight delay={1.8}>Software Developer</Highlight>
            </h1>
          </MotionUp>

          <MotionUp delay={0.3} className="my-4">
            <h6 className="text-center !leading-7 md:!leading-10  font-semibold text-2 lg:text-3xl max-w-xl  text-blue-100 ">
              Based in Himachal Pradesh, India,
              <br />
              Specialized in <Highlight delay={1.8}>React</Highlight> and{" "}
              <Highlight delay={1.8}>Next.js</Highlight>
            </h6>
          </MotionUp>

          <MotionUp delay={0.6} className="flex items-center gap-3 mt-5">
            <MagicButton
              title="Say Hi"
              icon={<FaLocationArrow />}
              position="right"
              className="w-[150px] text-lg"
            />

            <MagicButton
              title="Resume"
              icon={<FaDownload />}
              position="right"
              className="w-[150px] text-lg"
            />
          </MotionUp>
        </div>
      </Container>

      <Container className="mt-12 lg:mt-16 z-20 relative">
        <MotionUp delay={0.9}>
          <div
            className="p-0 py-10 md:p-14 rounded-lg"
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,0.85) 0%, rgba(12,14,35,0.80) 100%), url('https://cdn.sanity.io/images/y178r8ab/production/4737240c5a75234b9edca2e6f795273abb0f55a8-2276x1707.jpg?fit=max&auto=format')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex gap-8 flex-wrap lg:flex-nowrap lg:gap-16 overflow-hidden">
              <div className="order-2 lg:order-1 w-full  lg:w-[70%]">
                <h4 className="font-bold mb-5 text-purple text-3xl uppercase">
                  My Journey
                </h4>
                <p className="text-blue-100 text-normal sm:text-lg sm:text-justify">
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

              <div className="flex justify-center order-1 lg:order-2 w-full  lg:w-[30%]">
                <Image
                  src="https://cdn.sanity.io/images/y178r8ab/production/98e49e7e5d2f0581919cc01b7816aff4b9bebd24-934x1073.jpg?fit=max&auto=format"
                  width={300}
                  height={800}
                  alt="Abhishek"
                  className="rounded-lg aspect-square overflow-hidden"
                />
              </div>
            </div>
          </div>
        </MotionUp>
      </Container>
    </section>
  );
}
