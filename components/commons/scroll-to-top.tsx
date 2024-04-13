"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
                <div className="scrollToTop">
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
                        <svg className="svgIcon" viewBox="0 0 384 512">
                            <path
                                d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                            ></path>
                        </svg>
                    </motion.button>
                </div>
            )}
        </AnimatePresence>
    );
}
