"use client";

import { Container } from "../container";
import {
    MotionUp,
    ProjectCard,
    MagicButton,
    Modal,
    ModalBody,
    ModalContent,
} from "../animations";
import { SmallGridBackground } from "../bg-patterns";
import { useState } from "react";
import { useModal } from "@/context";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "Free Games Hub",
        img: "https://cdn.sanity.io/images/y178r8ab/production/5933cfd9b21d92c48c57272648203199851d246d-1764x926.png?fit=max&auto=format",
        description:
            "Explore a world of free PC games and browser-based fun at FreeGamesHub. Download exciting titles and play online without any cost. Your go-to destination for endless gaming enjoyment!",
        liveUrl: "https://www.freegameshub.fun",
        gitUrl: "https://github.com/abhishek1350",
        techStack: ["NextJS", "NextUI", "TailwindCSS", "TypeScript"],
    },
    {
        title: "DOGE INU",
        img: "https://cdn.sanity.io/images/y178r8ab/production/af233932d4dc9ba7a7dd6700e79278577cab2620-1902x914.png?fit=max&auto=format",
        description:
            "A community driven meme token on Dogechain! DINU was made to unleash the creativity and full potential of the DOGE community.",
        liveUrl: "https://dogeinu.dog",
        techStack: ["ReactJS", "TailwindCSS", "TypeScript"],
    },
    {
        title: "My Portfolio",
        img: "https://cdn.sanity.io/images/y178r8ab/production/da0932dc9508cfedb39af25ae07a710cdf5d978e-1896x921.png?fit=max&auto=format",
        description:
            "My personal portfolio, built with NextJS, TypeScript and Sanity CMS",
        liveUrl: "https://www.imabhishek.online",
        gitUrl: "https://github.com/abhishek1350",
        techStack: ["NextJS", "TailwindCSS", "TypeScript"],
    },
];

const INITIAL_ITEMS = 3;

export function Projects() {
    const [items, setItems] = useState(projects.slice(0, INITIAL_ITEMS));
    const [showAll, setShowAll] = useState(false);
    const { modalData } = useModal();

    function handleShowMore() {
        if (!showAll) {
            setShowAll(true);
            setItems(projects);
        } else {
            setShowAll(false);
            setItems(projects.slice(0, INITIAL_ITEMS));
        }
    }

    return (
        <SmallGridBackground className="py-20" id="projects">
            <Container>
                <MotionUp delay={0.2}>
                    <div className="flex justify-center relative z-20">
                        <div className="flex  items-center">
                            <span className="w-24 h-[2px] bg-slate-800"></span>
                            <h6 className="bg-slate-900 w-fit font-bold text-3xl text-blue-100 p-2 px-5 rounded-md">
                                A small selection of recent projects
                            </h6>
                            <span className="w-24 h-[2px] bg-slate-800"></span>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {items.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>

                    {projects.length > INITIAL_ITEMS && (
                        <MagicButton
                            title={showAll ? "Show Less" : "Show More"}
                            handleClick={handleShowMore}
                            className="mx-auto !block mt-12"
                        />
                    )}
                </MotionUp>
            </Container>

            <Modal>
                <ModalBody className="!max-w-[700px]">
                    <ModalContent className="mt-5">
                        <div className="mb-5 flex items-center flex-wrap gap-x-5 gap-y-2">
                            <h5 className="text-xl font-semibold text-blue-100">
                                {modalData?.title}
                            </h5>
                            <div className="flex gap-4 items-center">
                                {modalData?.liveUrl && (
                                    <Link
                                        href={modalData?.liveUrl}
                                        target="_blank"
                                        className="flex justify-center items-center text-purple"
                                    >
                                        <FaEye className="me-1" />
                                        <span className="text-[15px]">Check Live Site</span>
                                    </Link>
                                )}
                                {modalData?.gitUrl && (
                                    <Link
                                        href={modalData?.gitUrl}
                                        target="_blank"
                                        className="flex justify-center items-center text-purple"
                                    >
                                        <FaGithub className="me-1" />
                                        <span className="relative top-[1px] text-[15px]">
                                            Get code
                                        </span>
                                    </Link>
                                )}
                            </div>
                        </div>
                        <div className="border border-gray-700 border-opacity-75 p-4 rounded-lg mb-5">
                            <p className="leading-relaxed text-sm text-blue-100">
                                {modalData?.description}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 mb-5">
                            {modalData?.techStack?.map((item: string) => (
                                <p
                                    key={item}
                                    className="bg-slate-800/50  px-5 py-2 text-sm text-blue-100 rounded-sm"
                                >
                                    {item}
                                </p>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-x-2 gap-y-5 mb-5">
                            <Link
                                className="w-full sm:w-[49%]"
                                href={modalData?.img}
                                target="_blank"
                            >
                                <Image
                                    src={modalData?.img}
                                    alt={modalData?.title}
                                    height={500}
                                    width={500}
                                    className="rounded-lg w-full  max-h-48 cursor-pointer aspect-video object-cover"
                                />
                            </Link>
                            <Link
                                className="w-full sm:w-[49%]"
                                href={modalData?.img}
                                target="_blank"
                            >
                                <Image
                                    src={modalData?.img}
                                    alt={modalData?.title}
                                    height={500}
                                    width={500}
                                    className="rounded-lg w-full max-h-48 cursor-pointer aspect-video object-cover"
                                />
                            </Link>
                        </div>
                    </ModalContent>
                </ModalBody>
            </Modal>
        </SmallGridBackground>
    );
}
