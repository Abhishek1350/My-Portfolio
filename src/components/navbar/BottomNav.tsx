import { useState } from 'react';
import {
    BottomNavigation,
    BottomNavigationAction,
    Paper
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WebhookIcon from '@mui/icons-material/Webhook';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { useNavigate } from "react-router-dom";

interface NavLinks {
    name: string;
    pathname: string;
    icon: JSX.Element;
}

const BottomNav = () => {
    //for active state
    const [navValue, setNavValue] = useState<number>(0);
    const navLinks: NavLinks[] = [
        {
            name: "Home",
            pathname: "/",
            icon: <HomeIcon />
        },
        {
            name: "Projects",
            pathname: "/projects",
            icon: <WebhookIcon />
        },
        {
            name: "Blogs",
            pathname: "/blogs",
            icon: <RssFeedIcon />
        },
        {
            name: "Contact",
            pathname: "/contact",
            icon: <ContactPhoneIcon />
        },
    ]
    const navigate = useNavigate();

    const handleNavClick = (pathname: string) => {
        navigate(pathname);
    }

    return (
        <Paper sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
        }}
            elevation={3}
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
    );
}

export default BottomNav;