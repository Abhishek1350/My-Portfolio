import { Spotlight } from "./animations";

interface Props {
    children: React.ReactNode;
    className?: string;
    id?: string;
    mask?: boolean;
    element?: "div" | "section";
    spotlight?: boolean;
}

interface BackgroundContainerProps extends Props {
    bgClass: string;
    element: "div" | "section";
}

const BackgroundContainer = ({
    children,
    className,
    id,
    mask = true,
    element: Element,
    spotlight = false,
    bgClass,
}: BackgroundContainerProps) => {
    return (
        <Element className={`relative w-full ${bgClass} ${className}`} id={id}>
            {spotlight && (
                <Spotlight
                    className="left-80 top-28 h-[80vh] w-[50vw]"
                    fill="blue"
                />
            )}
            {mask && (
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            )}
            {children}
        </Element>
    );
};

export function GridBackground(props: Props) {
    return (
        <BackgroundContainer
            {...props}
            bgClass="dark:bg-grid-white/[0.05] bg-grid-black-100/[0.2]"
            element={props.element || "section"}
        />
    );
}

export function SmallGridBackground(props: Props) {
    return (
        <BackgroundContainer
            {...props}
            bgClass="dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]"
            element={props.element || "section"}
        />
    );
}

export function DotBackground(props: Props) {
    return (
        <BackgroundContainer
            {...props}
            bgClass="dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
            element={props.element || "section"}
        />
    );
}
