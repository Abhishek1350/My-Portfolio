export function Container({
    children,
    className,
    id
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) {
    return (
        <div className={`max-w-6xl w-full mx-auto px-4 ${className}`} id={id}>
            {children}
        </div>
    );
}
