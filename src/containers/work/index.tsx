import {
    Box,
    Container,
    Button,
    Typography,
} from "@mui/material";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { useSize } from "../../utils";
import styles from "./style.module.css"
import { Card } from "../../components";
import { useNavigate, useLocation } from "react-router-dom";
import { useSanityQuery, GET_PROJECTS } from "../../utils";

export const Work = () => {
    const { width } = useSize();
    const navigate = useNavigate();
    const location = useLocation();

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

            <Box className={location.pathname === "/" ? styles.workContainer : styles.work}>
                {
                    [1, 2, 3].map((item) => (
                        <Card />
                    ))
                }
            </Box>

            {
                location.pathname === "/" && (
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
                )
            }

        </Container>
    )
}