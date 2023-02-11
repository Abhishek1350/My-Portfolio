import {
    Container,
    Box
} from "@mui/material";
import styles from "./style.module.css"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiClient } from "../../utils";
import PortableText from "react-portable-text"
import { useSize } from "../../utils";

export const BlogPage = () => {
    const { slug } = useParams();
    const { width } = useSize();
    const [blogData, setBlogData] = useState<any>(null);
    const query = `*[slug.current == $slug]{
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
     }`

    useEffect(() => {
        apiClient.fetch(query, { slug }).then((data: any) => {
            setBlogData(data[0]);
        })
    }, [slug, query])

    if (!blogData) return <div>Loading...</div>

    return (
        <Container maxWidth={width > 768 ? "lg" : "md"}>
            <Box className={styles.blogPage}>
                <Box className={styles.blogPageImage}>
                    <img src={blogData.blogimage.asset.url} alt={blogData.title} />
                </Box>
                <Box className={styles.blogPageContent}>
                    <h1>{blogData.title}</h1>
                    <PortableText
                        content={blogData.content}
                        projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                        dataset="production"
                    />
                </Box>
            </Box>
        </Container>
    )
}