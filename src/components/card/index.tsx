import {
    Box,
    Typography
} from "@mui/material";
import styles from "./style.module.css"
import { Visibility, GitHub } from "@mui/icons-material"

interface CardProps {
    name: string;
    description: string;
    image: any;
    url: string | null;
    githubUrl: string | null;
    skill : string | null;
}

export const Card = (props: CardProps) => {
    return (
        <Box className={styles.card}>
            <Box className={styles.cardTop}>
                <img src={props.image} alt={props.name} />
                <Box className={styles.cardLinks}>
                    {
                        props.url && (
                            <a href={props.url} target="_blank" rel="noreferrer">
                                <Box className={styles.link}>
                                    <Visibility />
                                </Box>
                            </a>
                        )
                    }

                    {
                        props.githubUrl && (
                            <a href={props.githubUrl} target="_blank" rel="noreferrer">
                                <Box className={styles.link}>
                                    <GitHub />
                                </Box>
                            </a>
                        )
                    }
                </Box>
            </Box>

            <Box className={styles.cardBottom}>
                <Typography variant="h6" component="h6">
                    {props.name}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.description}
                </Typography>

                <Box className={styles.tag}>
                    <Typography variant="body1" component="span">
                        {/* sanity reference to skills document */}
                        {props?.skill}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}