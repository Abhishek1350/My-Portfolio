"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Text } from '@mantine/core';

interface WordAnimationProps {
    words: string[];
    duration?: number;
    className?: string;
}

export function WordAnimation({ words, duration = 2000, className = "" }: WordAnimationProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) =>
                prevIndex === words.length - 1 ? 0 : prevIndex + 1
            );
        }, duration);

        return () => clearInterval(interval);
    }, [duration, words.length]);

    if (!Array.isArray(words) || words.length === 0) return null;

    const currentWord = words[currentWordIndex];

    return (
        <motion.span
            key={currentWordIndex}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 30, opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Text
                fw={900}
                variant="gradient"
                gradient={{ from: 'teal', to: 'lime', deg: 90 }}
                className={className}
            >
                {currentWord}
            </Text>
        </motion.span>
    );
};

export default WordAnimation;