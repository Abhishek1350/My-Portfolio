import { Container } from "../container";
import { MagicCard, MotionUp, Timeline } from "../animations";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Heading } from "../";
import { WorkExperience, Skill, Certificate } from "@/lib/types";

function sortByStartDate(arr: WorkExperience[]): WorkExperience[] {
    return arr.toSorted(
        (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );
}

interface Props {
    experiences: WorkExperience[];
    skills: Skill[];
    certificates: Certificate[];
}

export function ExperienceSkills({ experiences, skills, certificates }: Props) {
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

                <MotionUp className="mt-10 p-0 py-10 rounded-lg" delay={0.1}>
                    {
                        certificates.length > 1 ? (
                            <Heading text="Certifications" />
                        ) : (
                            <Heading text={`${certificates[0].title} Certified`} />
                        )
                    }
                    {certificates.length === 1 ? (
                        <div className="max-w-4xl mx-auto mt-10 relative">
                            <a
                                href={certificates[0].url}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={certificates[0].title}
                            >
                                <Image
                                    src={certificates[0].image}
                                    alt={certificates[0].title}
                                    width={1280}
                                    height={800}
                                    className="rounded w-full h-full object-cover"
                                />
                            </a>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                            {certificates.map((certificate, index) => (
                                <a
                                    href={certificate?.url || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={index}
                                    title={certificate.title}
                                >
                                    <Image
                                        src={certificate.image}
                                        alt={certificate.title}
                                        width={1280}
                                        height={720}
                                        className="w-full h-full  rounded-xl"
                                    />
                                </a>
                            ))}
                        </div>
                    )}
                </MotionUp>
            </Container>
        </section>
    );
}
