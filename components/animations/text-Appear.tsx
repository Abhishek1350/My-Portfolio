"use client"

import { motion } from "framer-motion";

interface TextAppearAnimationProps {
    text: string;
    className?: string;
    center?: boolean;
}

const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
};

const child = {
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 100,
        },
    },
    hidden: {
        opacity: 0,
        x: -20,
        y: 10,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    },
};

export function TextAppearAnimation({ text, className, center }: TextAppearAnimationProps) {
    const words = text.split(" ");

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: center ? "center" : "flex-start" }}
            className={className}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    style={{ marginRight: "6px", fontFamily: "inherit" }}
                    key={index}
                    className={index === (words.length-1) ? "text-purple" : ""}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};