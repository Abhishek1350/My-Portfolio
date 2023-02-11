import {
    Grid,
    Box,
    Container,
    Typography,
} from "@mui/material";
import { useSize } from "../../utils";
import styles from "./style.module.css"
import ReactTypingEffect from 'react-typing-effect';


interface PersonalDetails {
    name: string,
    value: string
}

export const About = () => {
    const { width } = useSize();

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

    return (
        <Container maxWidth={width > 768 ? "lg" : "md"}>
            <Box className={styles.aboutHeading}>
                <Typography
                    variant={width > 500 ? "h2" : "h3"}
                    component="div"
                >
                    Make it {" "}
                    <ReactTypingEffect
                        text={["Work", "right", "fast"]}
                        speed={80}
                        eraseSpeed={40}
                        typingDelay={100}
                        eraseDelay={1800}
                    />
                </Typography>
            </Box>
            <Grid
                container
                spacing={2}
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