import React from 'react'
import { Container, Carousel } from "react-bootstrap";
import { motion } from "framer-motion"
import { urlFor } from "../../client"
const ProjectCard = ({project_stack, project_name, project_dec, project_images, project_url}) => {
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
                            src={urlFor(project_images[0])}
                            alt="First slide"
                            height={350}
                        />
                        <Carousel.Caption>
                            <h3 className="heading-ssm fw-bolder text-warning">{project_name}</h3>
                            <p className="paragraph">{project_dec}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src={urlFor(project_images[1])}
                            alt="Second slide"
                            height={350}
                        />
                        <Carousel.Caption>
                            <h3 className="heading-ssm fw-bolder text-warning">Tech Stack</h3>
                            <p className="paragraph">{project_stack}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src={urlFor(project_images[2])}
                            alt="Third slide"
                            height={350}
                        />
                        <Carousel.Caption>
                            <a href={project_url} target="_blank" rel="noreferer" className="btn btn-danger btn-lg my-4 fw-bold">Watch Live</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </motion.div>
        </Container>

    )
}

export default ProjectCard