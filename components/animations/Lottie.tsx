"use client";

import Lottie from "lottie-react";

export function AnimationLottie({
    animationData,
    width,
}: {
    animationData: unknown;
    width?: string;
}) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        style: {
            width: width ?? "100%",
        },
    };

    return <Lottie {...defaultOptions} />;
}
