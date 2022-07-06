import React, { useEffect, useState } from 'react'
import { Container } from "react-bootstrap";
import "./blogs.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import BlogCard from './BlogCard';
import { client } from "../../client"
import Spinner from "../spinner/Spinner"

const Blogs = () => {
    const [blogsData, setBlogsData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Abhishek-Blogs"
        const fetchBlogsData = async () => {
            try {
                const query = '*[_type=="blogs"]'
                const fetchedBlogsData = await client.fetch(query)
                setBlogsData(fetchedBlogsData)
                setLoading(false)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchBlogsData();
    }, [])
    return (
        <Container fluid className="pt-5 mt-5 blogs-container">
            <h1 className="heading text-center text-white  animated-left">
                My <span className="text-primary">Blogs</span> <span className="text-danger"><FontAwesomeIcon icon={faBlog} /></span>
            </h1>

            <Container className="blogs-cards-container my-4">
                {
                    loading ? <Spinner /> : blogsData.map((elem) => {
                        const { title, metadesc, blogimage, slug } = elem
                        return <BlogCard title={title} metadesc={metadesc} blogimage={blogimage} slug={slug} key={slug.current} />
                    })
                }
            </Container>

        </Container>
    )
}

export default Blogs