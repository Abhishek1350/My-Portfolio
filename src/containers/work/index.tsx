import {
    Box,
    Container,
    Button,
} from "@mui/material";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersonalDetails } from "../../services/actions/personalDetails";
import { useSize } from "../../utils";
import styles from "./style.module.css"
import ReactTypingEffect from 'react-typing-effect';
import { Card } from "../../components";

export const Work = () => {
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
            <Box className={styles.workContainer}>
                {
                    [1, 2, 3].map((item) => (
                        <Card />
                    ))
                }
            </Box>


            <Box sx={{
                display: "flex",
                justifyContent: "center!important",
                gap: "1rem",
            }}
            >
                <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    // onClick={props.buttonClick}
                    endIcon={<ExpandCircleDownIcon />}
                >
                    View More
                </Button>
            </Box>
        </Container>
    )
}