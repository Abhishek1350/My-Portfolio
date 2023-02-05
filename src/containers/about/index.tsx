import {
    Grid,
    Box,
    Container,
    Button,
    Typography
} from "@mui/material";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersonalDetails } from "../../services/actions/personalDetails";
import { useSize } from "../../utils";
import styles from "./style.module.css"
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ReactTypingEffect from 'react-typing-effect';
import { useLocation } from "react-router-dom";

export const About = () => {
    const { width } = useSize();
    const dispatch = useDispatch();
    const aboutRef = useRef(null);
    const location = useLocation();

    const personalDetails = useSelector((state: any) => state.projects);

    const state = useSelector((state: any) => state);

    const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);

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
        <Container maxWidth={width > 768 ? "lg" : "md"} sx={{ height: "100%", py: 3 }}>
            <Typography
                variant={width > 500 ? "h2" : "h4"}
                component="div"
                gutterBottom
                className={styles.aboutHeading}
            >
                <ReactTypingEffect
                    text={["I Fix the cause, not the symptom", "Simplicity is the soul of efficiency", "Make it work, make it right, make it fast"]}
                    speed={80}
                    eraseSpeed={40}
                    typingDelay={100}
                    eraseDelay={2500}
                    displayTextRenderer={(text: string, i: number) => {
                        return (
                            <div>
                                {text.split(' ').map((word: string, i: number) => {
                                    const key = `${i}`;
                                    return (
                                        <span
                                            key={key}
                                            className={
                                                word === 'cause,' ||
                                                    word === "symptom" ||
                                                    word === "Simplicity" ||
                                                    word === "soul" ||
                                                    word === "efficiency" ||
                                                    word === "work," ||
                                                    word === "right," ||
                                                    word === "fast"
                                                    ? styles.highlight : ''
                                            }
                                        >
                                            {word}
                                            {i < text.split(' ').length - 1 ? '\u00A0' : ''}
                                        </span>

                                    );
                                })}
                            </div>
                        );
                    }}
                />
            </Typography>
            <Grid
                container
                spacing={2}
                sx={{
                    // height: "100%",
                    // alignItems: "center",
                }}
            >
                <Grid item xs={12} md={6}>
                    <Typography
                        variant="h6"
                        component="div"
                        gutterBottom
                        className={styles.heading}
                    >
                        Personal Details
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography
                        variant="h6"
                        component="div"
                        gutterBottom
                        className={styles.heading}
                    >
                        Motivation
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}