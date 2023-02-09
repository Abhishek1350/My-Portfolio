import {
    Box,
    Typography
} from "@mui/material";
import styles from "./style.module.css"
import { Visibility } from "@mui/icons-material"

export const Card = () => {
    return (
        <Box className={styles.card}>
            <Box className={styles.cardTop}>
                <img src="/profile.webp" alt="" />
                <Box className={styles.cardLinks}>
                    <a href="/" target="_blank" rel="noreferrer">
                        <Box className={styles.link}>
                            <Visibility />
                        </Box>
                    </a>
                </Box>
            </Box>

            <Box className={styles.cardBottom}>
                <Typography variant="h6" component="h6">
                    Lorem ipsum dolor sit amet.
                </Typography>
                <Typography variant="body2" component="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                </Typography>

                <Box className={styles.tag}>
                    <Typography variant="body1" component="span">
                        Reactjs
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}