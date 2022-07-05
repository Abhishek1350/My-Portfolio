import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <Container fluid className="pt-5 mt-5 blogs-container">
      <h1 className="heading text-center text-white  animated-left">
        Working On It <span className="text-danger"><FontAwesomeIcon icon={faUserNinja} /></span>
      </h1>

    </Container>
  )
}

export default Blog