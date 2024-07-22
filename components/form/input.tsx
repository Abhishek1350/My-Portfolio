"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

type MotionComponentProps<T extends HTMLElement> = {
    className?: string;
    type?: string;
    as: React.ElementType;
    props?: React.HTMLAttributes<T>;
    ref?: React.Ref<T>;
};

const MotionComponent = <T extends HTMLElement>({
    className,
    type,
    as: Component,
    ...props
}: MotionComponentProps<T>) => {
    const radius = 100;
    const [visible, setVisible] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            style={{
                background: useMotionTemplate`
                    radial-gradient(
                        ${visible ? radius + "px" : "0px"
                    } circle at ${mouseX}px ${mouseY}px,
                        var(--blue-500),
                        transparent 80%
                    )
                `,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className="p-[2px] rounded-lg transition duration-300 group"
        >
            <Component
                type={type}
                className={cn(
                    `flex w-full border-none bg-zinc-900 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm 
                    placeholder:text-neutral-500 dark:placeholder-text-neutral-500 
                    focus-visible:outline-none  focus-visible:ring-0 dark:focus-visible:ring-0
                    disabled:cursor-not-allowed disabled:opacity-50
                    dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
                    group-hover:shadow-none transition duration-400`,
                    className
                )}
                {...props}
            />
        </motion.div>
    );
};

MotionComponent.displayName = "MotionComponent";

const Input = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => <MotionComponent as="input" ref={ref} {...props} />);

const Textarea = React.forwardRef<
    HTMLTextAreaElement,
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => <MotionComponent as="textarea" ref={ref} {...props} />);

Input.displayName = "Input";
Textarea.displayName = "Textarea";

export { Input, Textarea };
