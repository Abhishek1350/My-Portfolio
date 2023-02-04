import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Container,
    Button,
    Tooltip,
    Typography
} from "@mui/material";
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import HomeIcon from '@mui/icons-material/Home';
import WebhookIcon from '@mui/icons-material/Webhook';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useNavigate, useLocation } from "react-router-dom";
import { useSize } from "../../utils";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

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
            name: "projects",
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
    const { width } = useSize();
    const navigate = useNavigate();
    const location = useLocation();
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleNavClick = (pathname: string) => {
        navigate(pathname);
    }

    return (
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

                            <Box>
                                <Typography sx={{ fontSize: "20px" }}>
                                    imabhishek.me
                                </Typography>
                            </Box>

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
    );
}

export default TopNav;