export function Container({
    children,
    className,
}: {
    children: React.ReactNode;
    className: string;
}) {
    return (
        <div className={`max-w-7xl w-full mx-auto ${className}`}>
            {children}
        </div>
    );
}
