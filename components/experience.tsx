import { Container } from "./container";
import Lottie from "@/data/code.json";
import { AnimationLottie, MovingBorder } from "./animations";
import Image from "next/image";
import Link from "next/link";

export const experiences = [
    {
        id: 1,
        title: "ReactJS Developer",
        company: "FAB Web Studio",
        duration: "Jan 2024 - Present",
        img: "/logo.webp",
        compnayUrl: "freegameshub.fun",
        companyType: "Service",
        desc: "Building and managing interactive frontend UIs using React and Next.js. Integrating with backend APIs and services to fetch and manipulate data. Participating in client meetings to gather requirements, provide updates,and address feedback",
    },
    {
        id: 2,
        title: "Software Engineer",
        company: "Edvolve",
        duration: "Jan 2023 - Jan 2024",
        img: "/logo.webp",
        compnayUrl: "freegameshub.fun",
        companyType: "Product",
        desc: "Designed and developed 2 web applications from scratch using React and its ecosystem. Coordinated directly with the founding team to plan the roadmap and prioritize feature development. Participated in sprint planning and agile ceremonies to deliver features in iterative cycles",
    },
    {
        id: 3,
        title: "SWE Intern",
        company: "Edvolve",
        duration: "Aug 2022 - Jan 2023",
        img: "/logo.webp",
        compnayUrl: "freegameshub.fun",
        companyType: "Product",
        desc: "Transforming high-quality Figma designs into responsive web pages using React and it's ecosystem. Integrated with backend APIs and services to fetch and manage data effectively. Stayed updated with industry trends and best practices to drive innovation and product excellence",
    },
];

export function Experience() {
    return (
        <section className="py-20 relative w-full dark:bg-grid-white/[0.05] bg-grid-black-100/[0.2]">
            <Container>
                <div className="flex justify-center">
                    <div className="flex  items-center">
                        <span className="w-24 h-[2px] bg-slate-800"></span>
                        <h6 className="bg-slate-900 w-fit font-bold text-3xl text-blue-100 p-2 px-5 rounded-md">
                            Experiences
                        </h6>
                        <span className="w-24 h-[2px] bg-slate-800"></span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-12">
                    <div className="flex justify-center items-start">
                        <div className="w-full h-full">
                            <AnimationLottie animationData={Lottie} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        {experiences.map((experience) => (
                            <MovingBorder
                                key={experience.id}
                                duration={Math.floor(Math.random() * 10000) + 10000}
                                borderRadius="1rem"
                                style={{
                                    borderRadius: `calc(1rem* 0.96)`,
                                }}
                                className="flex-1 text-black dark:text-blue-100 border-neutral-200 dark:border-slate-800"
                            >
                                <div className="flex w-full p-4 py-6  gap-2">
                                    <Image
                                        src={experience.img}
                                        alt={experience.title}
                                        width={300}
                                        height={300}
                                        className="lg:w-20 w-16 rounded-full h-fit"
                                    />
                                    <div className="ms-2 sm:ms-5">
                                        <h3 className="text-start text-lg md:text-2xl font-bold">
                                            {experience.title}
                                        </h3>
                                        <h6 className="text-start text-white mt-1 font-semibold">
                                            <Link
                                                target="_blank"
                                                href={experience.compnayUrl}
                                                className="hover:underline"
                                            >
                                                {experience.company}
                                            </Link>{" "}
                                            <span className="inline-flex relative bottom-[0.5px] h-2 w-2 rounded-full bg-blue-100 mx-1 "></span>{" "}
                                            <span>{experience.companyType}</span>{" "}
                                            <span className="inline-flex relative bottom-[0.5px] h-2 w-2 rounded-full bg-blue-100 mx-1 "></span>{" "}
                                            <span>{experience.duration}</span>
                                        </h6>
                                        <p className="text-start text-sm mt-2 font-normal">
                                            {experience.desc}
                                        </p>
                                    </div>
                                </div>
                            </MovingBorder>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
