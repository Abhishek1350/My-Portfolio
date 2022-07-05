import React from 'react'
import profilePic from "../images/about.png";
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

const BlogsCard = () => {
    return (
        <Link to={'/blogs/:id'} className="text-white blog-card-box-link">
            <motion.div
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, type: "tween" }}
                whileHover={{scale:1.04}}
                className="blog-card-box">
                <div className="blog-card-img">
                    <img src={profilePic} alt="blog-img" />
                </div>
                <div className="blog-card-dec my-2">
                    <h4 className="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing ?</h4>
                    <p className="paragraph-sm text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, libero dolor sit amet consectetur adipisicing</p>
                </div>
            </motion.div>
        </Link>
    )
}

export default BlogsCard