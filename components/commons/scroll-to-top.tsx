"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { IconArrowUp } from "@tabler/icons-react";

export function ScrollToTop() {
    const [scrollPosition, setScrollPosition] = useState(0);

    function goToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        };

        window.addEventListener("scroll", updatePosition);

        return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    return (
        <AnimatePresence>
            {scrollPosition > 100 && (
                <motion.button
                    className="scrollToTop-btn"
                    onClick={goToTop}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.6 },
                    }}
                    exit={{
                        y: 100,
                        opacity: 0,
                        transition: { duration: 0.6 },
                    }}
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 1 }}
                >
                    <IconArrowUp size={24} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
