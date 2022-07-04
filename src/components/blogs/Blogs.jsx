import React, { useEffect } from 'react'
import { Container } from "react-bootstrap";
import "./blogs.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import BlogCard from './BlogCard';

const Blogs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Abhishek-Blogs"
    }, [])
    return (
        <Container fluid className="pt-5 mt-5 blogs-container">
            <h1 className="heading text-center text-white  animated-left">
                My <span className="text-primary">Blogs</span> <span className="text-danger"><FontAwesomeIcon icon={faBlog} /></span>
            </h1>

            <Container className="blogs-cards-container py-3">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </Container>

        </Container>
    )
}

export default Blogs