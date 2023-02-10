import { Box, Typography } from "@mui/material";
import styles from "./style.module.css"
import { LinkedIn, GitHub, Twitter } from '@mui/icons-material';
import ReactTypingEffect from "react-typing-effect";

export const Footer = () => {
    return (
        <footer>
            <Typography variant="h5" mb="20px">
                Social Links
            </Typography>
            <Box className={styles.socialMedia}>
                <a href="" target="_blank" rel="noreferrer">
                    <LinkedIn />
                </a>
                <a href="" target="_blank" rel="noreferrer">
                    <GitHub />
                </a>
                <a href="" target="_blank" rel="noreferrer">
                    <Twitter />
                </a>
            </Box>
            <Typography variant="body1" mt="20px" className={styles.footerText}>
                Made with {" "}
                <ReactTypingEffect
                    text={["❤️", "ReactJS", "Material UI", "TypeScript", "Sanity"]}
                    className={styles.typingEffect}
                    speed={100}
                    eraseSpeed={70}
                    typingDelay={80}
                    eraseDelay={1500}
                    displayTextRenderer={(text, i) => {
                        const colors = ["#FFA500", "#00aefff1", "#0000ff", "#3399FF"];
                        return (
                            <span style={{ color: colors[i % colors.length] }}>
                                {text}
                            </span>
                        );
                    }}
                />
            </Typography>
        </footer>
    )
}