import {
    Grid,
    Box,
    Container,
    Button,
    Typography,
    Skeleton
} from "@mui/material";
import styles from "./style.module.css";

export const Loader = () => {
    return (
        <section className={styles.section}>
            <Container sx={{ height: "100%" }}>
                <Grid
                    container
                    spacing={2}
                    sx={{
                        height: "100%",
                        alignItems: "center",
                    }}
                >
                    <Grid item xs={12} md={6} className={styles.homeTopGrid}>
                        <Box className={styles.homeTopImage + " animated-left"}>
                            <Skeleton variant="circular" width="100%" height="100%" sx={{ background: "var(--background_secondary)" }} />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} className={styles.homeTopGrid}>
                        <Box className={styles.homeTopcontent}>
                            <Typography variant="h2" component="p" gutterBottom className="animated-right">
                                <Skeleton variant="text" width={300} sx={{ background: "var(--background_secondary)" }} />
                            </Typography>
                            <Typography variant="h5" component="div" gutterBottom className="animated-right">
                                <Skeleton variant="text" width={250} sx={{ background: "var(--background_secondary)" }} />
                            </Typography>
                            <Typography variant="body1" component="p" gutterBottom className="animated-right">
                                <Skeleton variant="text" width={300} sx={{ background: "var(--background_secondary)" }} />
                                <Skeleton variant="text" width={300} sx={{ background: "var(--background_secondary)" }} />
                                <Skeleton variant="text" width={250} sx={{ background: "var(--background_secondary)" }} />
                            </Typography>
                            <Button
                                variant="outlined"
                                color="primary"
                                sx={{ mt: 2, ml: 0.5 }}
                                className="animated-right"
                            >
                                <Skeleton variant="text" width={200} sx={{ background: "var(--background_secondary)" }} />
                            </Button>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </section>
    )
}