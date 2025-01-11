import { Container } from "../container";
import { MagicCard, MotionUp, Timeline } from "../animations";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Heading } from "../";
import { WorkExperience, Skill } from "@/lib/types";

function sortByStartDate(arr: WorkExperience[]): WorkExperience[] {
    return arr.toSorted(
        (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );
}

interface Props {
    experiences: WorkExperience[];
    skills: Skill[];
}

export function ExperienceSkills({ experiences, skills }: Props) {
    const sortedExperiences = sortByStartDate(experiences);

    return (
        <section className="w-full py-10 md:py-20" id="about">
            <Container>
                <MotionUp delay={0.1}>
                    <Heading text="Career History" />
                    <Timeline data={sortedExperiences} />
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
                                        className="h-16 w-16 rounded-full object-cover border border-white bg-white"
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