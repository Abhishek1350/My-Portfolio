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


interface PersonalDetails {
    name: string,
    value: string
}

export const About = () => {
    const { width } = useSize();
    const dispatch = useDispatch();

    const personalDetailsFields = [
        {
            name: "Full Name",
            value: "Abhishek Bhardwaj"
        },
        {
            name: "Birth Year",
            value: "2001"
        },
        {
            name: "Education",
            value: "BCA"
        },
        {
            name: "Skill",
            value: "Web Development"
        },
        {
            name: "Experience",
            value: "1+ years"
        },
        {
            name: "Languages",
            value: "English, Hindi"
        },
        {
            name: "Address",
            value: "Himachal Pradesh, India"
        }
    ] as PersonalDetails[]

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
        <Container maxWidth={width > 768 ? "lg" : "md"}>
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
                <Grid item xs={12} md={6} className={styles.personalDetails}>
                    <Typography
                        variant="h5"
                        component="div"
                        gutterBottom
                        className={styles.heading}
                    >
                        Personal Details
                    </Typography>
                    <Box>
                        {
                            personalDetailsFields.map((field: PersonalDetails) => (
                                <Typography
                                    variant="body1"
                                    component="div"
                                    gutterBottom
                                    className={styles.personalDetailsItem}
                                    key={field.name}
                                >
                                    <span
                                        className={styles.personalDetailsItemKey}
                                    >
                                        {field.name} : {' '}
                                    </span>
                                    <span
                                        className={styles.personalDetailsItemValue}
                                    >
                                        {field.value}
                                    </span>
                                </Typography>
                            )
                            )
                        }

                    </Box>
                </Grid>

                <Grid item xs={12} md={6} className={styles.personalDetailsJoureny}>
                    <Typography
                        variant="h5"
                        component="div"
                        gutterBottom
                        className={styles.heading}
                    >
                        Journey
                    </Typography>
                    <Box>
                        <Typography
                            variant="body1"
                            component="div"
                            gutterBottom
                            className={styles.personalDetailsItem}
                        >
                            Started on June 2021 during Lockdown, All alone without any teacher or mentor. At that point I didn't know anything about Web development. So I grabbed that opportunity of learning something new in Lockdown. It was an amazing journey for me. I have learned so many things from the Internet. Now I am capable of making websites all by myself
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}