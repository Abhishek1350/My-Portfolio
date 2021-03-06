import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./home.css";
import profilePic from "../images/about.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import Typed from "react-typed";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title="Abhishek-Home"
  }, []);

  return (
    <Container
      fluid
      className="home-container d-flex justify-content-center align-items-center pt-5"
    >
      <div className="home-left">
        <img src={profilePic} className="animated-left" alt="Abhishek" />
      </div>

      <div className="home-right">
        <h2 className="my-2 text-center animated-right" style={{ animationDelay: "0.1s" }}>
          Hey, This Is <span className="text-primary"> Abhishek</span>{" "}
        </h2>
        <h3 className="mb-3 animated-right" style={{ animationDelay: ".3s" }}>
          I'm A <span className="text-danger">
            <Typed
              strings={["Designer", "Developer", "Coder"]}
              typeSpeed={100}
              backSpeed={80}
              loop={true}
            />
          </span> <span className="text-info">
            <FontAwesomeIcon icon={faReact} />
          </span>

        </h3>
        <p className="text-secondary mb-3 animated-right" style={{ animationDelay: "0.5s" }}>Wanna Know More About Me ? </p>
        <Link style={{ animationDelay: "0.7s" }}
          to="/about"
          className="btn btn-outline-primary mb-3 fw-bold fs-5 text-white animated-right"
        >
          About Me <FontAwesomeIcon icon={faUser} />{" "}
        </Link>
      </div>
    </Container>
  );
};

export default Home;
