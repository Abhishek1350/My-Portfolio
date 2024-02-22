"use client"

import { motion } from "framer-motion"

interface MotionDivProps {
    direction?: string;
    delay?: number;
    once?: boolean;
    children: React.ReactNode;
}

export function MotionDiv({ direction = "left", delay = 0.1, once = false, children }: MotionDivProps) {

    const fadeIn = () => {
        return {
            hidden: {
                y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
                opacity: 0,
                x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
            },
            show: {
                y: 0,
                x: 0,
                opacity: 1,
                transition: {
                    type: 'tween',
                    duration: 1,
                    delay: delay,
                    ease: [0.25, 0.25, 0.25, 0.75],
                },
            },
        };
    };

    return (
        <motion.div
            variants={fadeIn()}
            initial='hidden'
            whileInView='show'
            viewport={{ once: once }}
        >
            {children}
        </motion.div>
    )

}