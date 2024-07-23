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
import { Heading } from "../";
import { Project } from "@/lib/types";
import { sortByPriority } from "@/lib/utils";

interface Props {
    projects: Project[];
}

const INITIAL_ITEMS = 3;

export function Projects({ projects }: Props) {
    const [items, setItems] = useState(sortByPriority(projects).slice(0, INITIAL_ITEMS));
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
        <SmallGridBackground className="py-10" id="projects">
            <Container>
                <MotionUp delay={0.1}>
                    <Heading text="A Small Selection of Recent Projects" />

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {items.map((project, index) => (
                            <ProjectCard key={index} data={project} />
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
                            {modalData?.images?.map((item) => (
                                <Link
                                    key={item}
                                    className="w-full sm:w-[49%]"
                                    href={item}
                                    target="_blank"
                                >
                                    <Image
                                        src={item}
                                        alt={modalData.title}
                                        height={500}
                                        width={500}
                                        className="rounded-lg w-full  max-h-48 cursor-pointer aspect-video object-cover"
                                    />
                                </Link>
                            ))}
                        </div>
                    </ModalContent>
                </ModalBody>
            </Modal>
        </SmallGridBackground>
    );
}
