import { FaLocationArrow, FaDownload } from "react-icons/fa6";
import {
  MagicButton,
  MotionUp,
  Highlight,
  TextAppearAnimation,
} from "../animations";
import { Container } from "../container";
import Image from "next/image";
import { DotBackground, Heading } from "../";
import { PersonalInfo } from "@/lib/types";

interface Props {
  data: PersonalInfo;
}

export function Hero({ data }: Props) {
  return (
    <DotBackground className="pt-20" spotlight>
      <Container className="flex justify-center relative z-10 w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <MotionUp delay={0}>
            <h1 className="text-3xl  md:text-6xl text-neutral-700 dark:text-blue-100 !leading-snug text-center mx-auto font-[900]">
              Hi, I'm {data.name.split(" ")[0]}, a Self Taught
              <br />
              <Highlight delay={1.8}>
                {data.position}
              </Highlight>
            </h1>
          </MotionUp>

          <MotionUp delay={0.3} className="my-4">
            <h6 className="text-center !leading-7 md:!leading-10  font-semibold text-2 lg:text-3xl max-w-xl  text-blue-100 ">
              Based in {data.address},
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
              scroll="#contact"
            />

            <MagicButton
              title="Resume"
              icon={<FaDownload />}
              position="right"
              className="w-[150px] text-lg"
              externalLink={data.resume}
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
                `linear-gradient(90deg, rgba(4,7,29,0.85) 0%, rgba(12,14,35,0.80) 100%), url('${data.setupImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex gap-8 flex-wrap lg:flex-nowrap lg:gap-16 overflow-hidden">
              <div className="order-2 lg:order-1 w-full  lg:w-[70%]">
                <Heading
                  text="My Journey"
                  className="uppercase mb-5 text-left text-purple"
                />
                <p className="text-blue-100 text-normal sm:text-lg sm:text-justify">
                  {data.moreInfo}
                </p>
                <TextAppearAnimation
                  className="text-white italic font-semibold text-xl mt-5 uppercase animate-pulse"
                  text="Strongly believe in Karma"
                />
              </div>

              <div className="flex justify-center order-1 lg:order-2 w-full  lg:w-[30%]">
                <Image
                  src={data.profileImage}
                  width={300}
                  height={800}
                  alt={data.name}
                  className="rounded-lg aspect-square overflow-hidden"
                />
              </div>
            </div>
          </div>
        </MotionUp>
      </Container>
    </DotBackground>
  );
}
