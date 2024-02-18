import { Card, Text, Button, Box } from "@mantine/core";
import classes from './project-card.module.css';
import { IconArrowRight } from "@tabler/icons-react";

interface ProjectCardProps {
    image: string;
    title: string;
    path: string;
}

export function ProjectCard({ item }: { item: ProjectCardProps }) {

    return (
        <Card
            p="lg"
            shadow="lg"
            className={classes.card}
            radius="md"
        >
            <Box
                className={classes.image}
                style={{
                    backgroundImage: `url(${item.image})`,
                }}
            />
            <Box className={classes.content}>
                <Text size="lg" className={classes.title} fw={600}>
                    {item.title}
                </Text>
                <Button
                    variant="gradient"
                    gradient={{ from: 'lime', to: 'green', deg: 67 }}
                    size="sm"
                    radius="sm"
                    component="a"
                    href={item.path}
                    target="_blank"
                    rightSection={<IconArrowRight size={18} />}
                >
                    Visit
                </Button>
            </Box>
        </Card>
    );
}