import React, { useEffect, useState } from 'react'
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactCard, faEnvelope, faPhone, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import swal from 'sweetalert';

const Contact = () => {
    const [inputData, setInputData] = useState({ name: "", email: "", phone: "", subject: "", message: "" })

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Abhishek-Contact"
    }, []);

    let name, value;
    const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setInputData({ ...inputData, [name]: value })
    }

    const sendMail = (e) => {
        e.preventDefault();
        const { name, email, phone, subject, message } = inputData
        if (!name || !email || !phone || !subject || !message) {
            return swal("Opps!", " Please Fill All Data!", "error");
        }

        window.Email.send({
            Host: "smtp.elasticemail.com",
            Username: process.env.REACT_APP_USER_NAME,
            Password: process.env.REACT_APP_PASSWORD,
            To: process.env.REACT_APP_TO_EMAIL,
            From: process.env.REACT_APP_FROM_EMAIL,
            Subject: "New Query",
            Body: "Name : " + name
                + "<br> Email : " + email
                + "<br> Phone Number : " + phone
                + "<br> Subject : " + subject
                + "<br> message : " + message
        }).then(
            (message) => {
                if (message === "OK") {
                    swal("Thanks!", " " + inputData.name + ". Your message is delivered. I will contact you soon.", "success");
                    setInputData({ name: "", email: "", phone: "", subject: "", message: "" })
                }
                else {
                    swal("Opps!", " " + inputData.name + " Something went wrong! Please try again later", "error");
                    console.error(message);
                }
            });
    };
    return (
        <Container fluid className="pt-5 mt-5 contact">
            <h1 className="heading text-center text-white animated-left">
                Contact <span className="text-primary">Me</span> <span className="text-danger"><FontAwesomeIcon icon={faContactCard} /></span>
            </h1>

            <Container className="contact-container py-3 d-flex justify-content-around ">
                <div className="contact-container-left my-0 animated-left">
                    <h2 className="heading-sm text-warning mt-4" style={{ textAlign: "left" }}>Get In Touch</h2>
                    <p className="paragraph-sm text-white">Take A Cup Of Coffee And Let's Have A Chat</p>
                    <div className="contact-details mt-4">
                        <div className="contact-details-box d-flex">
                            <p className="heading-sm text-warning"><FontAwesomeIcon icon={faEnvelope} /></p>
                            <div className="contact-details-info mt-2 mx-4">
                                <h3 className="heading-ssm text-white" style={{ textAlign: "left" }}>Email :</h3>
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
                        <div className="social-icons d-flex mt-0 mx-2">
                            <p className="heading"><a href="#" className="text-info"><FontAwesomeIcon icon={faTwitter} /></a></p>
                            <p className="heading mx-5"><a href="#" className="text-primary"><FontAwesomeIcon icon={faLinkedin} /></a></p>
                        </div>
                    </div>
                </div>

                <div className="contact-container-right my-0 animated-right">
                    <h2 className="heading-sm text-center text-warning mt-3">Wanna Callback ?</h2>
                    <Form className="text-white mt-2" onSubmit={sendMail}>
                        <Row className="mb-2">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" name="name" onChange={handleChange} value={inputData.name} placeholder="Your Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="email" name="email" onChange={handleChange} value={inputData.email} placeholder="Your Email" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridNumber">
                                <Form.Label>Your Contact Number</Form.Label>
                                <Form.Control type="number" name="phone" onChange={handleChange} value={inputData.phone} placeholder="Your Number" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridSubject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" name="subject" onChange={handleChange} value={inputData.subject} placeholder="Your Subject" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Enter Your Message</Form.Label>
                                <Form.Control as="textarea" name="message" onChange={handleChange} value={inputData.message} placeholder="Your Message" rows={3} />
                            </Form.Group>
                        </Row>

                        <Row className="px-4 py-2">
                            <Button variant="outline-primary" type="submit" className="heading-sm fw-bold text-white" size="lg">Submit <FontAwesomeIcon icon={faArrowRight} /></Button>
                        </Row>
                    </Form>
                </div>
            </Container>

        </Container>
    )
}

export default Contact