import React, { useEffect } from 'react'
import { Container, Carousel } from "react-bootstrap";
import "./projects.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import profilePic from "../images/about.png";

const Porjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Abhishek-Projects"
  })
  return (
    <Container fluid className="pt-5 mt-5 projects-container">
      <h1 className="heading text-center text-white animated-left">
        My <span className="text-primary">Projects</span> <span className="text-danger"><FontAwesomeIcon icon={faBriefcase} /></span>
      </h1>

      <Container className="projects-cards-container py-3">
        <div className="projects-card">
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
                <a href="#" className="btn btn-outline-danger btn-lg my-4">Watch Live</a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="projects-card">
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
              <a href="#" className="btn btn-outline-danger btn-lg my-4">Watch Live</a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="projects-card">
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
              <a href="#" className="btn btn-outline-danger btn-lg my-4">Watch Live</a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="projects-card">
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
              <a href="#" className="btn btn-outline-danger btn-lg my-4">Watch Live</a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="projects-card">
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
              <a href="#" className="btn btn-outline-danger btn-lg my-4">Watch Live</a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>

    </Container>
  )
}

export default Porjects