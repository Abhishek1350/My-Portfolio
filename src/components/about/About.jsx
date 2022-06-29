import React from "react";
import { Container } from "react-bootstrap";
import "./about.css";
import Typed from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const About = () => {
    return (
        <Container fluid className="pt-5 mt-5 about-container">
            <h1 className="heading text-center text-white">
                About Me <FontAwesomeIcon icon={faUser} />
            </h1>
            <Container className="about-info d-flex justify-content-around my-3">
                <div className="about-info-left my-2">
                    <h2 className="heading-sm text-danger text-center">Personal Info</h2>
                    <p className="paragraph text-warning">
                        Name :{" "}
                        <span>
                            <Typed
                                strings={["Abhishek"]}
                                typeSpeed={50}
                                startDelay={300}
                                cursorChar=""
                            />
                        </span>{" "}
                    </p>
                    <p className="paragraph text-warning">
                        Email :{" "}
                        <span>
                            <Typed
                                strings={["abhibhardwaj1350@gmail.com"]}
                                typeSpeed={50}
                                startDelay={1200}
                                cursorChar=""
                            />
                        </span>
                    </p>
                    <p className="paragraph text-warning">
                        {" "}
                        Address :{" "}
                        <span>
                            <Typed
                                strings={["Chamba, Himachal Pradesh"]}
                                typeSpeed={50}
                                startDelay={3100}
                                cursorChar=""
                            />
                        </span>
                    </p>
                    <p className="paragraph text-warning">
                        Language :{" "}
                        <span>
                            <Typed
                                strings={["Hindi, English"]}
                                typeSpeed={50}
                                startDelay={4800}
                                cursorChar=""
                            />
                        </span>
                    </p>
                </div>

                <div className="about-info-right my-2">
                    <h2 className="heading-sm text-danger text-center">
                        <span className="text-danger">
                            <Typed
                                strings={["Story"]}
                                typeSpeed={10}
                                startDelay={6000}
                                cursorChar=""
                            />
                        </span>
                    </h2>
                    <p className="paragraph text-white">
                        <Typed
                            strings={[
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nam nihil quas, deserunt vitae quasi incidunt minus est non atque repellat reprehenderit fuga repudiandae corporis voluptatum perspiciatis sed sint ipsum beatae, magnam quis saepe! Eveniet.",
                            ]}
                            typeSpeed={10}
                            startDelay={6200}
                            cursorChar=""
                        />
                    </p>
                </div>
            </Container>
        </Container>
    );
};

export default About;
