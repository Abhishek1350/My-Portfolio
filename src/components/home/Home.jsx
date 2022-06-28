import React from 'react'
import { Container } from 'react-bootstrap'
import "./home.css"
import profilePic from "../images/about.png"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <Container fluid className="home-container d-flex justify-content-center align-items-center pt-5">
      <div className="home-left">
        <img src={profilePic} alt="Abhishek"/>
      </div>

      <div className="home-right mt-2">
        <h2 className="text-white fs-1">Hi, I Am Abhishek</h2>
        <p className="text-danger fs-3 mb-4">Web Developer</p>
        <p className="text-info fs-6 mt-1 text-center">I Love To Design & Develop Awesome Websites</p>
        <Link to="/about" className="btn btn-outline-primary mb-3 fw-bold fs-5 text-white"> About Me <FontAwesomeIcon icon={faUser} /> </Link>
      </div>
    </Container>
  )
}

export default Home