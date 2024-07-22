"use client";
import { useRouter } from "next/navigation";

export function MagicButton({
    title,
    icon,
    position,
    handleClick,
    className,
    scroll,
    externalLink,
}: {
    title: string;
    icon?: React.ReactNode;
    position?: string;
    handleClick?: () => void;
    className?: string;
    scroll?: string;
    externalLink?: string;
}) {
    const router = useRouter();

    function handleButtonClick() {
        if (externalLink) {
            window.open(externalLink, "_blank");
        }
        if (scroll) {
            return router.push(scroll);
        }
        if (handleClick) {
            handleClick();
        }

        return;
    }

    return (
        <button
            className={`relative inline-flex h-12 w-full md:w-60  overflow-hidden rounded-lg p-[1px] focus:outline-none ${className}`}
            onClick={handleButtonClick}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span
                className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-3 font-medium text-white backdrop-blur-3xl gap-2`}
            >
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
        </button>
    );
}

export default MagicButton;
