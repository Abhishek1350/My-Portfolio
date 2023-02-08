import {
    Grid,
    Box,
    Container,
    Typography
} from "@mui/material";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersonalDetails } from "../../services/actions/personalDetails";
import { useSize } from "../../utils";
import styles from "./style.module.css"
import ReactTypingEffect from 'react-typing-effect';


export const Skills = () => {
    const { width } = useSize();
    const dispatch = useDispatch();


    const personalDetails = useSelector((state: any) => state.projects);

    const state = useSelector((state: any) => state);

    useEffect(() => {
        // dispatch(getPersonalDetails('*[_type == "blogs"]'));
        console.log(state)
    }, [dispatch]);

    // if (personalDetails.loading) {
    //   return <div>Loading..</div>
    // }

    // if (personalDetails.error) {

    //   return <div>{personalDetails.error}</div>
    // }

    // if (personalDetails.data.length === 0) {
    //   return <div>No Data</div>
    // }


    return (
        <Container maxWidth={width > 768 ? "lg" : "md"} >
            <Box className={styles.skillsHeading}>
                <Typography
                    variant={width > 500 ? "h2" : "h4"}
                    component={width > 500 ? "h2" : "h4"}
                    gutterBottom
                >
                    Skills & Experience
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
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box className={styles.skillsBox}>
                        {
                            [1, 2, 4, 4, 5].map((item,) => (
                                <Box className={styles.skillBox}>
                                    <Box className={styles.skillBoxImg}>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU" alt="react" />
                                    </Box>
                                    <Typography variant="h6" component="div" mt={1} gutterBottom>
                                        React
                                    </Typography>
                                </Box>
                            ))
                        }
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box className={styles.exp}>
                        <Box className={styles.expBox}>
                            <Box className={styles.expBoxYear}>
                                <Typography variant="h6" component="div" mt={1} gutterBottom>
                                    2022
                                </Typography>
                            </Box>

                            <Box className={styles.expBoxRoles}>
                                <Box className={styles.expBoxRole}>
                                    <Typography variant="h6" component="div" mt={1} gutterBottom>
                                        Software Engineer Intern
                                    </Typography>
                                    <Typography variant="body1">
                                        Edvolve
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={styles.expBox}>
                            <Box className={styles.expBoxYear}>
                                <Typography variant="h6" component="div" mt={1} gutterBottom>
                                    2023
                                </Typography>
                            </Box>

                            <Box className={styles.expBoxRoles}>
                                <Box className={styles.expBoxRole}>
                                    <Typography variant="h6" component="div" mt={1} gutterBottom>
                                        Software Engineer
                                    </Typography>
                                    <Typography variant="body1">
                                        Edoutdoors
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}