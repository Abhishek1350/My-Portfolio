"use client";

import { motion } from "framer-motion";

export function Highlight({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
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
                delay: 0.5,
            }}
            style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                display: "inline",
            }}
            className={`relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-green-300 via-lime-400 to-emerald-500 dark:from-red-700 dark:via-red-700 dark:to-orange-600 ${className}`}
        >
            {children}
        </motion.span>
    );
}