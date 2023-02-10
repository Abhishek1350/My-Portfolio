import {
    Box,
    Container,
    Button,
    Typography,
} from "@mui/material";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { useEffect } from "react";
import { useSize } from "../../utils";
import styles from "./style.module.css"
import ReactTypingEffect from 'react-typing-effect';
import { BlogCard } from "../../components";
import { useNavigate, useLocation } from "react-router-dom";

export const Blogs = () => {
    const { width } = useSize();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Container maxWidth={width > 768 ? "lg" : "md"} >
            <Box className={location.pathname === "/" ? styles.blogsHeadingHome : styles.blogsHeading}>
                <Typography
                    variant={width > 500 ? "h2" : "h4"}
                    component={width > 500 ? "h2" : "h4"}
                    gutterBottom
                >
                    Blogs
                </Typography>
                <Typography variant={width > 500 ? "h5" : "h6"}>
                    Good skills means Good {" "}
                    <ReactTypingEffect
                        text={["Business", "Work", "Life"]}
                        className={styles.typingEffect}
                        speed={80}
                        eraseSpeed={80}
                        typingDelay={180}
                        eraseDelay={800}
                    />

                </Typography>
            </Box>

            <Box className={styles.blogsContainer}>
                {
                    [1, 2, 3].map((item) => (
                        <BlogCard />
                    ))
                }
            </Box>

            {
                location.pathname === "/" && (
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center!important",
                        gap: "1rem",
                        mt: "3rem"
                    }}
                    >
                        <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                            onClick={() => navigate("/blogs")}
                            endIcon={<ExpandCircleDownIcon />}
                        >
                            View All
                        </Button>
                    </Box>
                )
            }



        </Container>
    )
}