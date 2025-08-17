"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MotionWrapperProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export function FadeInUp({
    children,
    delay = 0,
    className,
}: MotionWrapperProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.section>
    );
}

export function FadeIn({ children, delay = 0, className }: MotionWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function SlideInLeft({
    children,
    delay = 0,
    className,
}: MotionWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function SlideInRight({
    children,
    delay = 0,
    className,
}: MotionWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
