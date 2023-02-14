import {
    Box,
    Container,
    Button,
    Typography,
} from "@mui/material";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { useSize } from "../../utils";
import styles from "./style.module.css"
import { Card, Loader } from "../../components";
import { useNavigate, useLocation } from "react-router-dom";
import { useSanityQuery, GET_PROJECTS, sanityImage } from "../../utils";
import { MotionWrapper } from "../../components";

interface Projects {
    description: string;
    githubUrl: string | null;
    image: any;
    name: string;
    url: string | null;
    _createdAt: string;
    skills: string | null;
}

const Work = () => {
    const { width } = useSize();
    const navigate = useNavigate();
    const location = useLocation();

    const { data, loading, error } = useSanityQuery(GET_PROJECTS);

    if (loading || error || !data) {
        return <Loader />
    }

    const sortByLatest = (a: Projects, b: Projects) => {
        const dateA = new Date(a._createdAt);
        const dateB = new Date(b._createdAt);
        return dateA < dateB ? 1 : -1;
    }

    return (
        <Container maxWidth={width > 768 ? "lg" : "md"} >
            <Box className={location.pathname === "/" ? styles.workHeadingHome : styles.workHeading}>
                <Typography
                    variant={width > 500 ? "h2" : "h4"}
                    component={width > 500 ? "h2" : "h4"}
                >
                    My Work
                </Typography>
            </Box>

            {
                location.pathname === "/" ? (
                    <>
                        <Box className={styles.workContainer}>
                            {
                                (data as Array<Projects>).slice(0, 3).sort(sortByLatest).map((project: Projects) => (
                                    <Card
                                        key={project._createdAt}
                                        name={project.name}
                                        description={project.description}
                                        image={sanityImage(project.image).url()}
                                        url={project.url}
                                        githubUrl={project.githubUrl}
                                        skills={project.skills}
                                    />
                                ))
                            }
                        </Box>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center!important",
                            gap: "1rem",
                            mt: "2rem"
                        }}
                        >
                            <Button
                                variant="outlined"
                                color="primary"
                                size="large"
                                onClick={() => navigate("/work")}
                                endIcon={<ExpandCircleDownIcon />}
                            >
                                View All
                            </Button>
                        </Box>
                    </>
                ) : (
                    <Box className={styles.work}>
                        {
                            (data as Array<Projects>).sort(sortByLatest).map((project: Projects) => (
                                <Card
                                    key={project._createdAt}
                                    name={project.name}
                                    description={project.description}
                                    image={sanityImage(project.image).url()}
                                    url={project.url}
                                    githubUrl={project.githubUrl}
                                    skills={project.skills}
                                />
                            ))
                        }
                    </Box>
                )
            }

        </Container>
    )
}

export default MotionWrapper(Work);