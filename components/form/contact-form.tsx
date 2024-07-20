"use client";

import { Label, Input, Textarea, LabelInputContainer } from "./";
import { IoSendSharp } from "react-icons/io5";

interface Props {
    className?: string;
}

export function ContactForm({ className }: Props) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <form className={className} onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Abhishek Bhardwaj" type="text" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="hello@imabhishek.online" type="email" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Want to build a website" type="text" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    rows={3}
                    id="message"
                    placeholder="Looking for a proficient software developer skilled in React and Next.js for a specific project"
                    className="resize-none"
                />
            </LabelInputContainer>

            <button
                className="group/btn relative h-12 w-full shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none"
                type="submit"
            >
                <span className="flex w-full justify-center items-center gap-2">
                    Submit <IoSendSharp />
                </span>
                <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};
