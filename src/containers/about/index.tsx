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

interface AboutProps {
    name: string,
    address: string,
    dateOfBirth: string,
    education: string,
    languages: string,
    moreInfo: [{ children: [{ text: string }] }],
    oneLiner: string,
    position: string,
    totalExperience: string
}

export const About = (props: AboutProps) => {
    const { width } = useSize();

    const personalDetailsFields = [
        {
            name: "Full Name",
            value: props.name
        },
        {
            name: "Birth Year",
            value: props.dateOfBirth.replace("-05-21", "")
        },
        {
            name: "Education",
            value: props.education
        },
        {
            name: "Skill",
            value: "Web Development"
        },
        {
            name: "Experience",
            value: props.totalExperience
        },
        {
            name: "Languages",
            value: props.languages
        },
        {
            name: "Address",
            value: props.address
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
                            {props.moreInfo[0].children[0].text}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

        </Container>
    )
}