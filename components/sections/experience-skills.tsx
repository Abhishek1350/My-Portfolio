import { Container } from "../container";
import expLottie from "@/data/experience.json";
import {
    AnimationLottie,
    MovingBorder,
    MagicCard,
    MotionUp,
} from "../animations";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Heading } from "../";
import { WorkExperience, Skill } from "@/lib/types";
import { formatDate } from "@/lib/utils";

function sortByStartDate(arr: WorkExperience[]): WorkExperience[] {
    return arr.sort(
        (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );
}

interface Props {
    experiences: WorkExperience[];
    skills: Skill[];
}

export function ExperienceSkills({ experiences, skills }: Props) {
    return (
        <section className="w-full py-20" id="about">
            <Container>
                <MotionUp delay={0.1}>
                    <Heading text="Career History" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-12">
                        <div className="flex justify-center items-start">
                            <div className="w-full h-full">
                                <AnimationLottie animationData={expLottie} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            {sortByStartDate(experiences).map((experience, index) => (
                                <MovingBorder
                                    key={index}
                                    duration={Math.floor(Math.random() * 10000) + 10000}
                                    borderRadius="1rem"
                                    style={{
                                        borderRadius: `calc(1rem* 0.96)`,
                                    }}
                                    className="flex-1 text-black dark:text-blue-100 border-neutral-200 dark:border-slate-800"
                                >
                                    <div className="flex w-full p-4 py-6  gap-2">
                                        <Image
                                            src={experience.companyLogo}
                                            alt={experience.companyName}
                                            width={300}
                                            height={300}
                                            className="lg:w-20 lg:h-20 h-16 w-16 rounded-full object-cover"
                                        />
                                        <div className="ms-2 sm:ms-5">
                                            <h3 className="text-start text-blue-100 text-lg md:text-2xl font-bold">
                                                {experience.position}
                                            </h3>
                                            <h6 className="text-start text-slate-300 mt-1 font-semibold">
                                                <Link
                                                    target="_blank"
                                                    href={experience.companyUrl}
                                                    className="hover:underline"
                                                >
                                                    {experience.companyName}
                                                </Link>{" "}
                                                <span className="inline-flex relative bottom-[0.5px] h-2 w-2 rounded-full bg-slate-300 mx-1 "></span>{" "}
                                                <span className="text-slate-300">
                                                    {formatDate(experience.startDate)} - {" "}
                                                    {experience.endDate
                                                        ? formatDate(experience.endDate)
                                                        : "Present"}
                                                </span>
                                            </h6>
                                            <p className="text-start text-slate-400 text-sm mt-2 font-normal">
                                                {experience.jobDescription}
                                            </p>
                                        </div>
                                    </div>
                                </MovingBorder>
                            ))}
                        </div>
                    </div>
                </MotionUp>

                <MotionUp className="mt-10 p-0 py-10 rounded-lg" delay={0.1}>
                    <Heading text="Expertise" />

                    <Marquee
                        speed={90}
                        pauseOnHover
                        className="mt-5 overflow-hidden py-5"
                    >
                        {skills.map((skill, index) => (
                            <MagicCard
                                className="hover:scale-105 transition-all duration-500 w-40 h-40 ms-10 flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
                                gradientColor="#262626"
                                key={index}
                            >
                                <div className="flex flex-col items-center w-full gap-2">
                                    <Image
                                        src={skill.image}
                                        alt={skill.name}
                                        width={80}
                                        height={80}
                                        className="h-16 w-16 rounded-full object-cover"
                                    />
                                    <h6 className="text-start text-lg font-bold text-blue-100">
                                        {skill.url ? (
                                            <Link
                                                target="_blank"
                                                href={skill.url}
                                                className="hover:underline"
                                            >
                                                {skill.name}
                                            </Link>
                                        ) : (
                                            skill.name
                                        )}
                                    </h6>
                                </div>
                            </MagicCard>
                        ))}
                    </Marquee>
                </MotionUp>
            </Container>
        </section>
    );
}
