import React, { useEffect, useState } from 'react'
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { client, urlFor } from '../../client';
import PortableText from "react-portable-text"

const Blog = () => {
  const [blogData, setBlogData] = useState([])
  const { slug } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = slug
    const fetchBlogData = async () => {
      try {
        const query = `*[_type == "blogs" && slug.current == '${slug}'][0]`;
        const fetchedBlogData = await client.fetch(query)
        setBlogData(fetchedBlogData)
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchBlogData();
    console.log(blogData);
    console.log(slug)
  }, [slug])

  return (
    <Container className="pt-5 mt-5 blogs-container">
      <h1 className="heading-ssm text-white">
        {
          blogData.title
        }
      </h1>

      {/* <PortableText
        // Pass in block content straight from Sanity.io
        content={blogData.content}
        projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
        dataset="production"
        // Optionally override marks, decorators, blocks, etc. in a flat
        // structure without doing any gymnastics
        serializers={{
          h3: (props) => <h3 style={{ color: "white" }} {...props} />,
          h4: (props) => <h4 style={{ color: "white" }} {...props} />,
          h4: (props) => <h4 style={{ color: "white" }} {...props} />,
          p: (props) => <p style={{color:"white"}} {...props}/>,
          li: ({ children }) => <li className="special-list-item">{children}</li>,
        }}
      /> */}
    </Container>
  )
}

export default Blog