"use client";

import { motion } from "framer-motion";

export function MotionUp({
    children,
    className,
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 100,
            }}
            transition={{
                delay: delay,
                duration: 1,
                ease: [0.4, 0.0, 0.2, 1],
            }}
            whileInView={{ opacity: 1, y: [100, -10, 0] }}
            viewport={{ once: true }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
