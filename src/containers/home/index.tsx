import {
  Grid,
  Box,
  Container,
  Button,
  Typography
} from "@mui/material";
import { useRef } from "react";
import { useSize } from "../../utils";
import styles from "./style.module.css"
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ReactTypingEffect from 'react-typing-effect';
import { About, Skills, Work, Blogs } from "../"
import { useSanityQuery, GET_PERSONAL_INFO, sanityImage } from "../../utils";

interface SanityData {
  name: string;
  slidingText: string;
  image: any;
  address: string;
  dateOfBirth: string;
  education: string;
  languages: string;
  moreInfo: [{ children: [{ text: string }] }];
  oneLiner: string;
  position: string;
  totalExperience: string;
}

export const Home = () => {
  const { width } = useSize();
  const aboutRef = useRef(null);
  const { data, error, loading } = useSanityQuery(GET_PERSONAL_INFO);

  const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!data) return <div>Not found...</div>;

  const {
    name,
    slidingText,
    image,
    oneLiner,
  }: SanityData = data[0];


  return (
    <main>
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
                <img src={sanityImage(image).url()} alt={name} />
              </Box>
            </Grid>

            <Grid item xs={12} md={6} className={styles.homeTopGrid}>
              <Box className={styles.homeTopcontent}>
                <Typography variant={width > 768 ? "h2" : "h3"} component="p" gutterBottom className="animated-right">
                  Hi, I'm <span className={styles.name}>
                    {name.split(" ")[0]}
                  </span>
                </Typography>
                <Typography variant="h5" component="div" gutterBottom pl={0.5} className="animated-right">
                  I'm a {" "}
                  <span>
                    <ReactTypingEffect
                      text={slidingText}
                      className={styles.typingEffect}
                      speed={110}
                      eraseSpeed={90}
                      typingDelay={300}
                      eraseDelay={2000}
                    />
                  </span>
                </Typography>
                <Typography variant="body1" component="p" gutterBottom pl={0.5} className="animated-right">
                  {oneLiner}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ mt: 2, ml: 0.5 }}
                  className="animated-right"
                  onClick={() => scrollToRef(aboutRef)}
                  size="large"
                  endIcon={<ExpandCircleDownIcon />}
                >
                  Know More
                </Button>
              </Box>
            </Grid>

          </Grid>
        </Container>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection} ref={aboutRef}>
        <About />
      </section>

      {/* Skills Section */}
      <section className={styles.skillsSection} >
        <Skills />
      </section>

      <section className={styles.workSection}>
        <Work />
      </section>

      <section className={styles.blogsSection}>
        <Blogs />
      </section>


    </main>
  )
}