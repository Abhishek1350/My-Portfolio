import { useState, useEffect } from "react";

interface Size {
    width: number;
    height: number;
}

export function useSize(): Size{
    const [windowSize, setWindowSize] = useState<Size>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
};