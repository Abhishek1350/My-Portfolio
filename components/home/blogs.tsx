"use client"

import { motion } from "framer-motion"
import { BlogCard } from ".."
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
        description: 'A collection of free games to play online. A collection of free games to play online. A collection of free games to play online. A collection of free games to play online',
        tag: 'outstanding',
        minRead: '5 min read',
        
    },
    {
        image: 'https://cdn.sanity.io/images/wpw9cxdm/production/07aa735a1af9e47db2c14f122ffd8ccc4bba70a5-1903x931.png',
        title: 'Free Games Hub',
        description: 'A collection of free games to play online. A collection of free games to play online. A collection of free games to play online. A collection of free games to play online',
        tag: 'outstanding',
        minRead: '5 min read',
    },
    {
        image: 'https://cdn.sanity.io/images/wpw9cxdm/production/07aa735a1af9e47db2c14f122ffd8ccc4bba70a5-1903x931.png',
        title: 'Free Games Hub',
        description: 'A collection of free games to play online. A collection of free games to play online. A collection of free games to play online. A collection of free games to play online',
        tag: 'outstanding',
        minRead: '5 min read',
    },
];

export function Blogs() {
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
                        <BlogCard item={item}/>
                    </motion.div>
                );
            })}
        </SimpleGrid>
    );
};