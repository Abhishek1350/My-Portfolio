"use client"

import { motion } from "framer-motion"
import { ProjectCard } from ".."
import { SimpleGrid } from "@mantine/core"

const stagger = 0.50;
const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const data = [
    {
        image: 'https://cdn.sanity.io/images/wpw9cxdm/production/07aa735a1af9e47db2c14f122ffd8ccc4bba70a5-1903x931.png',
        title: 'Free Games Hub',
        description: 'A collection of free games to play online',
        live: 'https://www.iabhishek.tech/',
        gitUrl:'https://www.iabhishek.tech/',
        tech:["ReactJs", "NextJs"]
    },
    {
        image: 'https://cdn.sanity.io/images/wpw9cxdm/production/07aa735a1af9e47db2c14f122ffd8ccc4bba70a5-1903x931.png',
        title: 'Free Games Hub',
        description: 'A collection of free games to play online',
        live: 'https://www.iabhishek.tech/',
        gitUrl:'https://www.iabhishek.tech/',
        tech:["ReactJs", "NextJs"]
    },
    {
        image: 'https://cdn.sanity.io/images/wpw9cxdm/production/07aa735a1af9e47db2c14f122ffd8ccc4bba70a5-1903x931.png',
        title: 'Free Games Hub',
        description: 'A collection of free games to play online',
        live: 'https://www.iabhishek.tech/',
        gitUrl:'https://www.iabhishek.tech/',
        tech:["ReactJs", "NextJs"]
    },
];

export function RecentWork() {
    return (
        <SimpleGrid cols={{ base: 1, xs: 2, md:3 }} spacing={30} mt={50}>
            {data.map((item, index) => {
                return (
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: index * stagger,
                            ease: "easeInOut",
                            duration: 0.5,
                        }}
                        key={index}
                    >
                        <ProjectCard item={item} />
                    </motion.div>
                );
            })}
        </SimpleGrid>
    );
};