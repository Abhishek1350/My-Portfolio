import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import { useSize } from "../../utils";

export const Navbar = () => {
    const { width } = useSize();
    return (
        <>
            <TopNav />
            {
                width < 768 && (
                    <BottomNav />
                )
            }
        </>
    )
};
