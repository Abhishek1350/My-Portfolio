"use client";

import { motion } from "framer-motion";

export function Highlight({
    children,
    className,
    delay = 1,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.span
            initial={{
                backgroundSize: "0% 100%",
            }}
            animate={{
                backgroundSize: "100% 100%",
            }}
            transition={{
                duration: 1.3,
                ease: "linear",
                delay: delay,
            }}
            style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                display: "inline",
            }}
            className={`relative inline-block py-1 px-2 rounded-md bg-gradient-to-r from-blue-900 via-indigo-900 to-indigo-500 ${className}`}
        >
            {children}
        </motion.span>
    );
}
