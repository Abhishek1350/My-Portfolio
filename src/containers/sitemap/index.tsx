import { useMemo } from "react";
import { Container, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Sitemap = () => {

    const links = useMemo(() => {
        return [
            {
                name: "Home",
                link: "/",
            },
            {
                name: "Blogs",
                link: "/blogs",
            },
            {
                name: "Work",
                link: "/work",
            },
        ]
    }, [])


    return (
        <Container>
            <Typography variant="h1" mt={3} sx={{ fontWeight: 700, fontSize: "40px" }}>
                Sitemap
            </Typography>
            <Box>
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    Company
                </Typography>
                <Box pl={4} mt={2}>
                    <ul>
                        {
                            links?.map((link, index) => (
                                <Typography variant="subtitle1" mb={1} key={index} sx={{ textDecoration: "underline" }}>
                                    <li >
                                        <Link to={link?.link}>
                                            {link?.name}
                                        </Link>
                                    </li>
                                </Typography>
                            ))
                        }
                    </ul>
                </Box>
            </Box>
        </Container>
    );
}

export default Sitemap;