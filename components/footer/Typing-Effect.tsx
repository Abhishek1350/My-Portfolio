"use client";

import ReactTypingEffect from 'react-typing-effect';
import {Text} from "@mantine/core";

const text = ["❤️", "NextJS", "MantineUI", "TypeScript", "Sanity"]

export function TypingEffect() {
    return (
        <ReactTypingEffect
            text={text}
            speed={100}
            eraseSpeed={70}
            typingDelay={80}
            eraseDelay={1500}
            displayTextRenderer={(text: string, i: number) => {
                const colors = ["#FFA500", "#00aefff1", "#1976D2", "#3399FF"];
                return (
                    <span style={{ color: colors[i % colors.length] }}>
                        {text}
                    </span>
                );
            }}
        />
    )
}