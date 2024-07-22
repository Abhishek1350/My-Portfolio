"use client";

import { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaHome, FaUser } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { GrProjects } from "react-icons/gr";

const navItems = [
    {
        name: "Home",
        link: "/",
        icon: <FaHome className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
        name: "About",
        link: "#about",
        icon: <FaUser className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
        name: "Projects",
        link: "#projects",
        icon: <GrProjects className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
        name: "Contact",
        link: "#contact",
        icon: (
            <MdContactMail className="h-6 w-6 text-neutral-500 dark:text-white" />
        ),
    },
];

export function FloatingNav({ className }: { className?: string }) {
    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0) {
                console.log(scrollYProgress.get());
                setVisible(false);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: 100,
                }}
                animate={{
                    y: visible ? 0 : 100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.5,
                }}
                className={cn(
                    "flex max-w-max fixed bottom-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-3 px-5 items-center justify-center space-x-4 backdrop-blur-sm bg-black/[0.5]",
                    className
                )}
            >
                {navItems.map((navItem, idx: number) => (
                    <Link
                        key={`link=${idx}`}
                        href={navItem.link}
                        className={cn(
                            "relative dark:text-neutral-50 items-center flex text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                        )}
                    >
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden sm:block text-sm font-semibold text-blue-100">{navItem.name}</span>
                    </Link>
                ))}
            </motion.div>
        </AnimatePresence>
    );
}
