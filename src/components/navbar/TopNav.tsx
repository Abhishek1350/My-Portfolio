import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Container,
    Button,
    Tooltip,
    Typography,
} from "@mui/material";
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import HomeIcon from '@mui/icons-material/Home';
import WebhookIcon from '@mui/icons-material/Webhook';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useNavigate, useLocation } from "react-router-dom";
import { useSize } from "../../utils";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import HideNavOnScroll from "./HideNavOnScroll";
import ReactTypingEffect from 'react-typing-effect';

interface NavLinks {
    name: string;
    pathname: string;
    icon: JSX.Element;
}

const TopNav = () => {
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
    const { width } = useSize();
    const navigate = useNavigate();
    const location = useLocation();
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleNavClick = (pathname: string) => {
        navigate(pathname);
    }

    return (
        <HideNavOnScroll direction="down">
            <AppBar
                position="sticky"
                sx={{
                    background: "var(--background_secondary)",
                    color: "var(--textColor_secondary)",
                    height: width > 768 ? "60px" : "56px",
                }}
            >
                {
                    //Desktop
                    width > 768 ? (
                        <Container maxWidth="lg">
                            <Toolbar disableGutters>
                                <IntegrationInstructionsIcon
                                    sx={{
                                        display: "flex",
                                        mr: 4,
                                        cursor: "pointer",
                                        transition: "all 0.3s ease-in-out",
                                        "&:hover": {
                                            color: "var(--textColor_primary)",
                                        }
                                    }}
                                    onClick={() => handleNavClick("/")}
                                />

                                <Box sx={{ flexGrow: 1, display: "flex", }}>
                                    {navLinks.map((link: NavLinks) => (
                                        <Button
                                            key={link.name}
                                            sx={{
                                                display: "flex",
                                                gap: 1.2,
                                                color: location.pathname === link.pathname ? "var(--textColor_secondary)" : "var(--textColor_primary)",
                                                mr: 4,
                                                "&:hover": {
                                                    color: "var(--textColor_secondary)",
                                                }
                                            }}
                                            onClick={() => handleNavClick(link.pathname)}
                                        >
                                            <Typography sx={{ display: "flex" }}>
                                                {link.icon}
                                            </Typography>
                                            <Typography sx={{ fontWeight: "500" }}>
                                                {link.name}
                                            </Typography>
                                        </Button>
                                    ))}
                                </Box>

                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title={theme === "dark" ? "Light Mode" : "Dark Mode"}>
                                        <IconButton sx={{ p: 0 }} onClick={toggleTheme}>
                                            {
                                                theme === "dark" ? (
                                                    <Brightness4Icon sx={{ color: "var(--textColor_primary)", fontSize: "30px" }} />
                                                ) : (
                                                    <DarkModeIcon sx={{ color: "var(--textColor_primary)", fontSize: "30px" }} />
                                                )
                                            }
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            </Toolbar>
                        </Container>
                    ) : (
                        //Mobile
                        <Container maxWidth="md">
                            <Toolbar sx={{ justifyContent: "space-between" }}>
                                <Box>
                                    <IntegrationInstructionsIcon
                                        sx={{
                                            display: "flex",
                                            cursor: "pointer",
                                            transition: "all 0.3s ease-in-out",
                                            "&:hover": {
                                                color: "var(--textColor_primary)",
                                            }
                                        }}
                                        onClick={() => handleNavClick("/")}
                                    />
                                </Box>


                                <Typography variant="h5" component="div" gutterBottom pt={1}>
                                    <ReactTypingEffect
                                        text={["EAT", "SLEEP", "CODE", "COFFEE", "REPEAT"]}
                                        speed={110}
                                        eraseSpeed={90}
                                        typingDelay={200}
                                        eraseDelay={1000}
                                    />
                                </Typography>


                                <Box>
                                    <Tooltip title={theme === "dark" ? "Light Mode" : "Dark Mode"}>
                                        <IconButton sx={{ p: 0 }} onClick={toggleTheme}>
                                            {
                                                theme === "dark" ? (
                                                    <Brightness4Icon sx={{ color: "var(--textColor_primary)" }} />
                                                ) : (
                                                    <DarkModeIcon sx={{ color: "var(--textColor_primary)" }} />
                                                )
                                            }
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            </Toolbar>
                        </Container>
                    )
                }
            </AppBar>
        </HideNavOnScroll>
    );
}

export default TopNav;