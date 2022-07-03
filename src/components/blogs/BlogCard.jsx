import React from 'react'
import profilePic from "../images/about.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";

const BlogsCard = () => {
    return (
        <div className="blogs-card">
            <div className="blogs-card-img">
                <img height={210} src={profilePic} alt="Card-Image" />
            </div>
            <div className="blogs-card-body">
                <h2 className="heading-ssm m-0 fw-bold" style={{ textAlign: "left", color: "#f8f8ff" }}>How To Make Awesome Websites ? With...</h2>
                <p className="paragraph-sm m-0 my-1" style={{ color: "#f8f8ff" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident nam A jjfk sll with uispn fit...</p>
                <a href="#" target="_black" className="btn btn-outline-info fw-bold my-2">Read More <FontAwesomeIcon icon={faBookReader}/></a>
            </div>
        </div>
    )
}

export default BlogsCard