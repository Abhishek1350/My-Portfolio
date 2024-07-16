"use client";

import Lottie from "lottie-react";

export function AnimationLottie({ animationData }: { animationData: unknown }) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        style: {
            width: '100%',
        }
    };

    return (
        <Lottie {...defaultOptions} />
    );
};