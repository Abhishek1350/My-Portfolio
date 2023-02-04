import {
  Grid,
  Box,
  Container,
  Button,
  Typography
} from "@mui/material";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersonalDetails } from "../../services/actions/personalDetails";
import { useSize } from "../../utils";
import styles from "./style.module.css"

export const Home = () => {
  const { width } = useSize();
  const dispatch = useDispatch();
  const aboutRef = useRef(null);
  const personalDetails = useSelector((state: any) => state.projects);

  const state = useSelector((state: any) => state);

  const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);

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
    <div>
      {/* Home Section */}
      <section className={styles.section}>
        <Container maxWidth={width > 768 ? "lg" : "md"} sx={{ height: "100%" }}>
          <Grid
            container
            spacing={2}
            sx={{
              height: "100%",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} md={6} className={styles.homeTopGrid}>
              <Box className={styles.homeTopImage + " animated-left"}>
                <img src="/profile.webp" alt="" />
              </Box>
            </Grid>

            <Grid item xs={12} md={6} className={styles.homeTopGrid}>
              <Box className={styles.homeTopcontent}>
                <Typography variant={width > 768 ? "h2" : "h3"} component="p" gutterBottom className="animated-right">
                  Hi, I'm <span className={styles.name}>Abhishek</span>
                </Typography>
                <Typography variant="h5" component="p" gutterBottom pl={0.5} className="animated-right">
                  I'm a <span className={styles.workText}>Software Engineer</span>
                </Typography>
                <Typography variant="body1" component="p" gutterBottom pl={0.5} className="animated-right">
                  I am adept in React, Next.js, Redux, Material UI, and Bootstrap. Right now I'm toiling as a Software Engineer at an impressive startup.
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ mt: 2, ml: 0.5 }}
                  className="animated-right"
                  onClick={() => scrollToRef(aboutRef)}
                >
                  Know More
                </Button>
              </Box>
            </Grid>

          </Grid>
        </Container>
      </section>

      {/* About Section */}
      <section className={styles.section} ref={aboutRef}>
        <Container maxWidth={width > 768 ? "lg" : "md"} sx={{ height: "100%" }}>
          <Grid
            container
            spacing={2}
            sx={{
              height: "100%",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} md={6} className={styles.homeTopGrid}>
              <Box className={styles.homeTopImage + " animated-left"}>
                <img src="/profile.webp" alt="" />
              </Box>
            </Grid>

            <Grid item xs={12} md={6} className={styles.homeTopGrid}>
              <Box className={styles.homeTopcontent}>
                <Typography variant={width > 768 ? "h2" : "h3"} component="p" gutterBottom className="animated-right">
                  Hi, I'm <span className={styles.name}>Abhishek</span>
                </Typography>
                <Typography variant="h5" component="p" gutterBottom pl={0.5} className="animated-right">
                  I'm a <span className={styles.workText}>Software Engineer</span>
                </Typography>
                <Typography variant="body1" component="p" gutterBottom pl={0.5} className="animated-right">
                  I am adept in React, Next.js, Redux, Material UI, and Bootstrap. Right now I'm toiling as a Software Engineer at an impressive startup.
                </Typography>
                <Button variant="outlined" color="primary" sx={{ mt: 2, ml: 0.5 }} className="animated-right">
                  Know More
                </Button>
              </Box>
            </Grid>

          </Grid>
        </Container>
      </section>
    </div>
  )
}