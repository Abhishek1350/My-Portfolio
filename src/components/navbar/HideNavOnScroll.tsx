import {
    useScrollTrigger,
    Slide,
} from "@mui/material";

interface HideOnScroll {
    children: React.ReactElement;
    direction: "down" | "up";
}

const HideNavOnScroll = ({ children, direction }: HideOnScroll) => {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={true} direction={direction} in={!trigger}>
            {children}
        </Slide>
    );
};

export default HideNavOnScroll;