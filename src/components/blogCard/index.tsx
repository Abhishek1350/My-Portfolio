import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
} from "@mui/material";
import styles from "./style.module.css"
import { Link } from "react-router-dom";

interface BlogCardProps {
    title: string;
    content: string;
    metadesc: string;
    image: string;
    slug: string;
}

export const BlogCard = (props: BlogCardProps) => {
    return (
        <Card component={Link} to={`/blogs/${props.slug}`} className={styles.blogCard}>
            <CardMedia
                component="img"
                height="140"
                image={props.image}
                alt={props.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                    {props.title.slice(0, 50)}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.metadesc.slice(0, 100)}
                </Typography>
            </CardContent>
            <CardActions>
                <Box sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "90%"
                }}>
                    <Typography variant="body2">
                        5 min read
                    </Typography>
                </Box>
            </CardActions>
        </Card>
    )
}