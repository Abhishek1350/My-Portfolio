export function Container({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`max-w-6xl w-full mx-auto px-6 sm:px-0 ${className}`}>
            {children}
        </div>
    );
}
