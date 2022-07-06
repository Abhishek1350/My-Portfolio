import React, { useEffect, useState } from 'react'
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { client, urlFor } from '../../client';
import PortableText from "react-portable-text"
import Spinner from '../spinner/Spinner';
import "./blogpage.css"

const BlogPage = () => {
  const [blogData, setBlogData] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = slug
    client
      .fetch(
        `*[slug.current == $slug]{
          title,
          metadesc,
          slug,
          blogimage{
            asset->{
              _id,
              url
             }
           },
         content
       }`,
        { slug }
      )
      .then((data) => setBlogData(data[0]))
      .catch(console.error);
  }, [slug])

  if (!blogData) return <Spinner />

  return (
    <Container className="pt-5 mt-5 blog-container">
      <h1 className="heading-ssm text-center text-primary">
        {
          blogData.title
        }
      </h1>

      <p className="paragraph-sm">
        {
          blogData.metadesc
        }
      </p>

      <img src={urlFor(blogData.blogimage).url()} alt="" />

      <Container className="blog-content py-4 my-2">
        <PortableText
          content={blogData.content}
          projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
          dataset="production"
        />
      </Container>
    </Container>
  )
}

export default BlogPage