import {
    Grid,
    Box,
    Container,
    Typography,
} from "@mui/material";
import { useSize } from "../../utils";
import styles from "./style.module.css"
import ReactTypingEffect from 'react-typing-effect';
import { useSanityQuery, GET_SKILLS, GET_EXPERIENCES, sanityImage } from "../../utils";
import { MotionWrapper } from "../../components";

interface Skill {
    image: any,
    name: string,
    link: string
}

interface Experiences {
    companyName: string,
    position: string,
    startDate: string,
    endDate: string,
}


const Skills = () => {
    const { width } = useSize();

    const { data: skills, loading: skillsLoading, error: skillsErr } = useSanityQuery(GET_SKILLS);
    const { data: experiences, loading: expLoading, error: expErr } = useSanityQuery(GET_EXPERIENCES);

    if (skillsLoading || expLoading) {
        return <div>Loading...</div>
    }

    if (skillsErr || expErr) {
        return <div>Error</div>
    }

    if (!skills || !experiences) {
        return <div>Not found</div>
    }

    const sortByName = (a: Skill, b: Skill) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }


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
                            (skills as Array<Skill>).sort((a, b) => sortByName(a, b)).map((skill: Skill) => (
                                <Box className={styles.skillBox} key={skill.name}>
                                    <Box className={styles.skillBoxImg}>
                                        <img src={sanityImage(skill.image).url()} alt={skill.name} />
                                    </Box>
                                    <Typography variant="body1" component="p" mt={1} gutterBottom>
                                        {skill.name}
                                    </Typography>
                                </Box>
                            ))
                        }
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box className={styles.exp}>
                        {
                            (experiences as Array<Experiences>).map((exp: Experiences) => (
                                <Box className={styles.expBox} key={exp.endDate}>
                                    <Box className={styles.expBoxYear}>
                                        <Typography variant="h6" component="div" mt={1} gutterBottom>
                                            {exp.startDate}
                                        </Typography>
                                    </Box>

                                    <Box className={styles.expBoxRoles}>
                                        <Box className={styles.expBoxRole}>
                                            <Typography variant="h6" component="div" mt={1} gutterBottom>
                                                {exp.position}
                                            </Typography>
                                            <Typography variant="body1">
                                                {exp.companyName}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))

                        }
                    </Box>
                </Grid>
            </Grid>

        </Container>
    )
}

export default MotionWrapper(Skills);