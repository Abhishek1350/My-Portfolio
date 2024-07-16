export function Container({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`max-w-6xl w-full mx-auto px-4 ${className}`}>
            {children}
        </div>
    );
}
