import React from 'react'
import profilePic from "../images/about.png";
import { Container, Carousel } from "react-bootstrap";
import { motion } from "framer-motion"
const ProjectCard = () => {
    return (
        <Container className="projects-card">
            <motion.div
                whileInView={{opacity:1}}
                transition={{duration:0.8, type:"tween"}}
                className="project-card-motion"
            >
                <Carousel>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src={profilePic}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="heading-ssm">Project Name</h3>
                            <p className="paragraph-sm">Project Description</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src={profilePic}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3 className="heading-ssm">Tech Stack</h3>
                            <p className="paragraph-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src={profilePic}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <a href="#" className="btn btn-outline-danger btn-lg my-4 fw-bold">Watch Live</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </motion.div>
        </Container>

    )
}

export default ProjectCard