import {
    Grid,
    Box,
    Container,
    Typography,
} from "@mui/material";
import { useSize } from "../../utils";
import styles from "./style.module.css"
import ReactTypingEffect from 'react-typing-effect';
import { MotionWrapper } from "../../components";
import { useSanityQuery, GET_PERSONAL_INFO } from "../../utils";


interface PersonalDetails {
    name: string,
    value: string
}

interface SanityData {
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

const About = () => {
    const { width } = useSize();

    const { data, error, loading } = useSanityQuery(GET_PERSONAL_INFO);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error...</div>;
    if (!data) return <div>Not found...</div>;

    const { name, address, dateOfBirth, education, languages, moreInfo, totalExperience } = data[0] as SanityData;

    const personalDetailsFields = [
        {
            name: "Full Name",
            value: name
        },
        {
            name: "Birth Year",
            value: dateOfBirth.replace("-05-21", "")
        },
        {
            name: "Education",
            value: education
        },
        {
            name: "Skill",
            value: "Web Development"
        },
        {
            name: "Experience",
            value: totalExperience
        },
        {
            name: "Languages",
            value: languages
        },
        {
            name: "Address",
            value: address
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
                            {moreInfo[0].children[0].text}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

        </Container>
    )
}

export default MotionWrapper(About) 