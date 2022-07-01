import React from "react";
import { Container } from "react-bootstrap";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserNinja } from "@fortawesome/free-solid-svg-icons";
import htmlImg from "../images/html.png"
import cssImg from "../images/css.png"
import jsImg from "../images/js.png"
import reactImg from "../images/react.png"
import mongoImg from "../images/mongo.png"
import nodeImg from "../images/node.png"
import bootstrapImg from "../images/bootstrap.png"
import mysqlImg from "../images/mysql.png"

const About = () => {
    return (
        <Container fluid className="pt-5 mt-5 about-container">
            <h1 className="heading text-center text-primary animated-left">
                About <span className="text-white">Me</span> <span className="text-info"><FontAwesomeIcon icon={faUser} /></span>
            </h1>
            <Container className="about-info d-flex justify-content-around mt-3">
                <div className="about-info-left mt-2 animated-left">
                    <h2 className="heading-sm text-danger text-center mb-3">Personal Info</h2>
                    <p className="paragraph text-warning">
                        Name : <span> Abhishek </span>
                    </p>
                    <p className="paragraph text-warning">
                        Date Of Birth : <span> May, 2001 </span>
                    </p>
                    <p className="paragraph text-warning">
                        Address : <span> Chamba, Himachal Pradesh </span>
                    </p>
                    <p className="paragraph text-warning">
                        Skill : <span> Web Developer </span>
                    </p>
                    <p className="paragraph text-warning">
                        Language : <span> Hindi, English </span>
                    </p>
                </div>

                <div className="about-info-right mt-2 animated-right">
                    <h2 className="heading-sm text-danger text-center mb-3">
                        Story
                    </h2>
                    <p className="paragraph text-white">
                        Started on June 2021 during Lockdown, All alone without any teacher or mentor. At that point I didn't know anything about Web development. So I grabbed that opportunity of learning something new in Lockdown. It was an amazing journey for me. I have learned so many things from the Internet. Now I am capable of making websites all by myself.
                    </p>
                </div>
            </Container>

            <Container className="skills-container mt-5 pb-4 ">
                <h1 className="heading text-center text-white animated-right">
                    My <span className="text-primary">Skills</span> <span className="text-info"><FontAwesomeIcon icon={faUserNinja} /></span>
                </h1>
                <div className="skills-img-box py-3 animated-left">
                    <div className="box">
                        <img src={htmlImg} alt="html" />
                        <h3 className="heading-ssm">html</h3>
                    </div>
                    <div className="box">
                    <img src={cssImg} alt="css"/>
                        <h3 className="heading-ssm">css</h3>
                    </div>
                    <div className="box">
                        <img src={jsImg} alt="javascript" />
                        <h3 className="heading-ssm">javascript</h3>
                    </div>
                    <div className="box">
                        <img src={bootstrapImg} alt="bootstrap" />
                        <h3 className="heading-ssm">bootstrap</h3>
                    </div>
                    <div className="box">
                        <img src={reactImg} alt="react" />
                        <h3 className="heading-ssm">react</h3>
                    </div>
                    <div className="box">
                        <img src={nodeImg} alt="nodejs" />
                        <h3 className="heading-ssm">nodejs</h3>
                    </div>
                    <div className="box">
                        <img src={mongoImg} alt="mongodb" />
                        <h3 className="heading-ssm">mongodb</h3>
                    </div>
                    <div className="box">
                        <img src={mysqlImg} alt="mysql" />
                        <h3 className="heading-ssm">mysql</h3>
                    </div>
                </div>
            </Container>


        </Container>
    );
};

export default About;
