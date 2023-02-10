import {
    Box,
    Typography,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    CardActions,
} from "@mui/material";
import styles from "./style.module.css"
import { Link } from "react-router-dom";

export const BlogCard = () => {
    return (
        <Card component={Link} to={"/blogs/2"} className={styles.blogCard}>
            <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                    Lizard
                </Typography>
                <Typography variant="body2" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Box sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "90%"
                }}>
                    <Typography variant="body2">
                        2 min read
                    </Typography>
                </Box>
            </CardActions>
        </Card>
    )
}