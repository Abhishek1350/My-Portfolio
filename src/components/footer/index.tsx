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
                <a href="https://www.linkedin.com/in/abhishek-bhardwaj-76b9a721b/" target="_blank" rel="noreferrer">
                    <LinkedIn />
                </a>
                <a href="https://github.com/Abhishek1350" target="_blank" rel="noreferrer">
                    <GitHub />
                </a>
                <a href="https://twitter.com/abhishek1350" target="_blank" rel="noreferrer">
                    <Twitter />
                </a>
            </Box>
            <Typography variant="body1" component="div"  mt="20px" className={styles.footerText}>
                Made with {" "}
                <ReactTypingEffect
                    text={["❤️", "ReactJS", "Material UI", "TypeScript", "Sanity"]}
                    className={styles.typingEffect}
                    speed={100}
                    eraseSpeed={70}
                    typingDelay={80}
                    eraseDelay={1500}
                    displayTextRenderer={(text, i) => {
                        const colors = ["#FFA500", "#00aefff1", "#1976D2", "#3399FF"];
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