import {
    Box,
    Container,
    Button,
    Typography,
} from "@mui/material";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersonalDetails } from "../../services/actions/personalDetails";
import { useSize } from "../../utils";
import styles from "./style.module.css"
import { Card } from "../../components";
import { useNavigate, useLocation } from "react-router-dom";

export const Work = () => {
    const { width } = useSize();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();


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
            <Box className={location.pathname==="/" ? styles.workHeadingHome : styles.workHeading}>
                <Typography
                    variant={width > 500 ? "h2" : "h4"}
                    component={width > 500 ? "h2" : "h4"}
                >
                    My Work
                </Typography>
            </Box>

            <Box className={styles.workContainer}>
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