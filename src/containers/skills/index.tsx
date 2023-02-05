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


export const Skills = () => {
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
        <Container maxWidth={width > 768 ? "lg" : "md"}>
            <Typography
                variant={width > 500 ? "h2" : "h4"}
                component="div"
                gutterBottom
                className={styles.skillsHeading}
            >
                <ReactTypingEffect
                    text={["Skills", "That I ", "Gained"]}
                    speed={80}
                    eraseSpeed={40}
                    typingDelay={100}
                    eraseDelay={2500}
                />
            </Typography>
        </Container>
    )
}