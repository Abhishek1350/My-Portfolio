import { cn } from "@/lib/utils";

export function LabelInputContainer ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
})  {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};