import { useState, useEffect } from 'react';
import {
    BottomNavigation,
    BottomNavigationAction,
    Paper
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WebhookIcon from '@mui/icons-material/Webhook';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { useNavigate } from "react-router-dom";
import HideNavOnScroll from './HideNavOnScroll';
import { useLocation } from 'react-router-dom';

interface NavLinks {
    name: string;
    pathname: string;
    icon: JSX.Element;
}

const BottomNav = () => {
    //for active state
    const currentPath = useLocation().pathname;
    const [navValue, setNavValue] = useState<number>(0);
    const navLinks: NavLinks[] = [
        {
            name: "Home",
            pathname: "/",
            icon: <HomeIcon />
        },
        {
            name: "Work",
            pathname: "/work",
            icon: <WebhookIcon />
        },
        {
            name: "Blogs",
            pathname: "/blogs",
            icon: <RssFeedIcon />
        },
    ]
    const navigate = useNavigate();

    const handleNavClick = (pathname: string) => {
        navigate(pathname);
    }

    useEffect(() => {
        switch (currentPath) {
            case "/":
                setNavValue(0);
                break;
            case "/work":
                setNavValue(1);
                break;
            case "/blogs":
                setNavValue(2);
                break;
            default:
                setNavValue(1);
                break;
        }
    }, [currentPath])

    return (
        <HideNavOnScroll direction='up'>
            <Paper sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 9999,
            }}
                elevation={5}
            >
                <BottomNavigation
                    showLabels
                    value={navValue}
                    onChange={(event, newValue) => {
                        setNavValue(newValue);
                    }}
                    sx={{
                        background: "var(--background_secondary)",
                        color: "var(--textColor_primary)",
                    }}
                >
                    {
                        navLinks.map((link: NavLinks) => (
                            <BottomNavigationAction
                                key={link.name}
                                label={link.name}
                                icon={link.icon}
                                onClick={() => handleNavClick(link.pathname)}
                                sx={{
                                    color: "var(--textColor_secondary)",
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                }}
                            />
                        ))
                    }

                </BottomNavigation>
            </Paper>
        </HideNavOnScroll>
    );
}

export default BottomNav;