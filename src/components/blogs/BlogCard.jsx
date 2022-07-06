import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { urlFor } from "../../client"

const BlogsCard = ({ title, metadesc, blogimage, slug }) => {
    return (
        <Link to={`/blogs/${slug.current}`} className="text-white blog-card-box-link">
            <motion.div
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, type: "tween" }}
                whileHover={{ scale: 1.04 }}
                className="blog-card-box">
                <div className="blog-card-img">
                    <img src={urlFor(blogimage)} alt="blog-img" />
                </div>
                <div className="blog-card-dec my-2">
                    <h4 className="paragraph">{title.slice(0, 50)}...</h4>
                    <p className="paragraph-sm text-secondary">{metadesc.slice(0, 115)}...</p>
                </div>
            </motion.div>
        </Link>
    )
}

export default BlogsCard