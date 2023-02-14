import {
    Container,
    Box,
    Typography,
    Skeleton
} from "@mui/material";
import styles from "./style.module.css"

export const Loader = () => {
    return (
        <Container maxWidth="lg" sx={{ height: "100%" }}>
            <Box className={styles.loader}>
                {
                    [1, 2, 3, 4, 5, 6].map((index: number) => (
                        <Box className={styles.card} key={index}>
                            <Box className={styles.cardTop}>
                                <Skeleton variant="rectangular" width="100%" height="100%" />
                                <Box className={styles.cardLinks}>
                                    <Skeleton variant="rectangular" width={40} height={40} />
                                </Box>
                            </Box>

                            <Box className={styles.cardBottom}>
                                <Typography variant="h6" component="h6">
                                    <Skeleton variant="text" width={200} />
                                </Typography>
                                <Typography variant="body2" component="p">
                                    <Skeleton variant="text" width={200} />
                                    <Skeleton variant="text" width={200} />
                                    <Skeleton variant="text" width={200} />
                                </Typography>

                                <Box className={styles.tag}>
                                    <Typography variant="body1" component="span">
                                        <Skeleton variant="text" width={100} />
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))
                }
            </Box>

        </Container>
    )
}