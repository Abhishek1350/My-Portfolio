import React from 'react'
import { Container } from 'react-bootstrap'
import "./home.css"
import profilePic from "../images/about.png"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  return (
    <Container fluid className="home-container d-flex justify-content-center align-items-center pt-5">
      <div className="home-left">
        <img src={profilePic} alt="Abhishek" />
      </div>

      <div className="home-right">
        <h2 className="text-white mb-2">Hi, I Am Abhishek</h2>
        <h3 className="text-danger mb-3">Web Developer <span className="text-info"><FontAwesomeIcon icon={faReact} /></span> </h3>
        <p className="text-warning mb-3">I Love To Design & Develop Awesome Websites</p>
        <Link to="/about" className="btn btn-outline-primary mb-3 fw-bold fs-5 text-white"> About Me <FontAwesomeIcon icon={faUser} /> </Link>
      </div>
    </Container>
  )
}

export default Home