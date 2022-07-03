import React, { useEffect } from 'react'
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactCard, faEnvelope, faPhone,faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Abhishek-Contact"
    }, [])
    return (
        <Container fluid className="pt-5 mt-5 contact">
            <h1 className="heading text-center text-white animated-left">
                Contact <span className="text-primary">Me</span> <span className="text-danger"><FontAwesomeIcon icon={faContactCard} /></span>
            </h1>

            <Container className="contact-container py-3 d-flex justify-content-around  animated-right">
                <div className="contact-container-left my-3">
                    <h2 className="heading-sm text-warning mt-3" style={{textAlign:"left"}}>Get In Touch</h2>
                    <p className="paragraph-sm text-white">Take A Cup Of Coffee And Let's Have A Chat</p>
                    <div className="contact-details mt-4">
                        <div className="contact-details-box d-flex">
                            <p className="heading-sm text-warning"><FontAwesomeIcon icon={faEnvelope} /></p>
                            <div className="contact-details-info mt-2 mx-4">
                                <h3 className="heading-ssm text-white" style={{textAlign:"left"}}>Email :</h3>
                                <p className="paragraph-sm text-white">abhibhardwaj1350@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-details-box my-4 d-flex ">
                            <p className="heading-sm text-warning"><FontAwesomeIcon icon={faPhone} /></p>
                            <div className="contact-details-info mt-2 mx-4">
                                <h3 className="heading-ssm text-white">Phone Number :</h3>
                                <p className="paragraph-sm text-white">8219567966</p>
                            </div>
                        </div>
                        <div className="social-icons d-flex mt-0 mx-1">
                            <p className="heading"><a href="#" className="text-info"><FontAwesomeIcon icon={faTwitter} /></a></p>
                            <p className="heading mx-5"><a href="#" className="text-primary"><FontAwesomeIcon icon={faLinkedin} /></a></p>
                        </div>
                    </div>
                </div>
                
                <div className="contact-container-right my-3">
                    <h2 className="heading-sm text-center text-warning mt-2">Wanna Callback ?</h2>
                    <Form className="text-white mt-4">
                        <Row className="mb-4">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control className="heading" type="text" placeholder="Your Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="email" placeholder="Your Email" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridNumber">
                                <Form.Label>Your Contact Number</Form.Label>
                                <Form.Control type="number" placeholder="Your Number" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridSubject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" placeholder="Your Subject" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-2">
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Enter Your Message</Form.Label>
                                <Form.Control as="textarea" placeholder="Your Message" rows={3} />
                            </Form.Group>
                        </Row>

                        <Row className="px-4 py-4">
                            <Button variant="outline-primary" className="heading-sm fw-bold text-white" size="lg">Submit <FontAwesomeIcon icon={faArrowRight}/></Button>
                        </Row>
                    </Form>
                </div>
            </Container>

        </Container>
    )
}

export default Contact