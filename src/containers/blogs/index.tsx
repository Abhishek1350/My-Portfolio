import {
    Box,
    Container,
    Button,
    Typography,
} from "@mui/material";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { useSize } from "../../utils";
import styles from "./style.module.css"
import { BlogCard } from "../../components";
import { useNavigate, useLocation } from "react-router-dom";
import { useSanityQuery, GET_BLOGS, sanityImage } from "../../utils";
import { MotionWrapper } from "../../components";

interface Blog {
    blogimage: any;
    content: any;
    title: string;
    metadesc: string;
    slug: {
        current: string;
    };
}


const Blogs = () => {
    const { width } = useSize();
    const navigate = useNavigate();
    const location = useLocation();

    const { data, loading, error } = useSanityQuery(GET_BLOGS);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error</div>
    }

    if (!data) {
        return <div>Not found</div>
    }

    return (
        <Container maxWidth={width > 768 ? "lg" : "md"} >
            <Box className={location.pathname === "/" ? styles.blogsHeadingHome : styles.blogsHeading}>
                <Typography
                    variant={width > 500 ? "h2" : "h4"}
                    component={width > 500 ? "h2" : "h4"}
                    gutterBottom
                >
                    Blogs
                </Typography>
            </Box>

            {
                location.pathname === "/" ? (
                    <>
                        <Box className={styles.blogsContainer}>
                            {
                                (data as Array<Blog>).slice(0, 3).map((blog: Blog) => (
                                    <BlogCard
                                        key={blog.slug.current}
                                        title={blog.title}
                                        content={blog.content}
                                        metadesc={blog.metadesc}
                                        image={sanityImage(blog.blogimage).url()}
                                        slug={blog.slug.current}
                                    />
                                ))
                            }
                        </Box>

                        <Box sx={{
                            display: "flex",
                            justifyContent: "center!important",
                            gap: "1rem",
                            mt: "3rem"
                        }}
                        >
                            <Button
                                variant="outlined"
                                color="primary"
                                size="large"
                                onClick={() => navigate("/blogs")}
                                endIcon={<ExpandCircleDownIcon />}
                            >
                                View All
                            </Button>
                        </Box>
                    </>
                ) : (
                    <Box className={styles.blogs}>
                        {
                            (data as Array<Blog>).map((blog: Blog) => (
                                <BlogCard
                                    key={blog.slug.current}
                                    title={blog.title}
                                    content={blog.content}
                                    metadesc={blog.metadesc}
                                    image={sanityImage(blog.blogimage).url()}
                                    slug={blog.slug.current}
                                />
                            ))
                        }
                    </Box>
                )
            }

        </Container>
    )
}

export default MotionWrapper(Blogs);