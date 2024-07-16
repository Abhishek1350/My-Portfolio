import { Container } from "./container";
import Lottie from "@/data/code.json";
import { AnimationLottie, MovingBorder } from "./animations";
import Image from "next/image";

export const experiences = [
    {
        id: 1,
        title: "ReactJS Developer",
        company: "FAB Web Studio",
        duration: "Jan 2024 - Present",
        img: "/logo.webp",
    },
    {
        id: 2,
        title: "Software Engineer",
        company: "Edvolve",
        duration: "Jan 2023 - Jan 2024",
        img: "/logo.webp",
    },
    {
        id: 3,
        title: "SWE Intern",
        company: "Edvolve",
        duration: "Aug 2022 - Jan 2023",
        img: "/logo.webp",
    },
];

export function Experience() {
    return (
        <section className="py-20 relative w-full dark:bg-grid-white/[0.05] bg-grid-black-100/[0.2]">
            <Container>
                <div className="flex justify-center">
                    <div className="flex  items-center">
                        <span className="w-24 h-[2px] bg-slate-800"></span>
                        <h6 className="bg-slate-800 w-fit font-bold text-3xl text-blue-100 p-2 px-5 rounded-md">
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
                                        <p className="text-start text-white mt-1 font-semibold">
                                            {experience.company} | {experience.duration}
                                        </p>
                                        <p className="text-start text-sm mt-2 font-normal">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Ad similique deserunt et magnam saepe est hic molestiae
                                            placeat ducimus culpa!
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
