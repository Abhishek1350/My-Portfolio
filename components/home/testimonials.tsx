"use client";

import { motion } from "framer-motion"
import { TestimonialCard } from ".."
import { SimpleGrid } from "@mantine/core"

const stagger = 0.50;
const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const data = [
    {
        image: 'https://avatars.githubusercontent.com/u/72749432?v=4',
        title: 'Abhishek Bhardwaj',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla eveniet quo fugit iure aperiam adipisci quas alias autem eligendi. Deleniti.',
        url: 'https://iabhishek.tech',
        position:"Founder",
        company:"iAbhishek"
    },
    {
        image: 'https://avatars.githubusercontent.com/u/72749432?v=4',
        title: 'Abhishek Bhardwaj',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla eveniet quo fugit iure aperiam adipisci quas alias autem eligendi. Deleniti.',
        url: 'https://iabhishek.tech',
        position:"CEO",
        company:"iAbhishek"
    },
    {
        image: 'https://avatars.githubusercontent.com/u/72749432?v=4',
        title: 'Abhishek Bhardwaj',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla eveniet quo fugit iure aperiam adipisci quas alias autem eligendi. Deleniti.',
        url: 'https://iabhishek.tech',
        position:"Tech Lead",
        company:"iAbhishek"
    },
];

export function Testimonials() {
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
                        <TestimonialCard item={item}/>
                    </motion.div>
                );
            })}
        </SimpleGrid>
    );
};