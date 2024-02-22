"use client"

import { motion } from "framer-motion";

interface StaggerItemProps {
    once?: boolean;
    index: number;
    children: React.ReactNode;
}

const stagger = 0.2;
const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export function StaggerItem({ once = false, index, children }: StaggerItemProps) {
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{
                delay: index * stagger,
                ease: "easeInOut",
                duration: 0.5,
            }}
            viewport={{ once: once }}
            key={index}
        >
            {children}
        </motion.div>
    );
};