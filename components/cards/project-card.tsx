"use client"

import {
    Card,
    Image,
    Text,
    Group,
    Badge,
    ActionIcon,
    Box,
} from "@mantine/core";
import classes from "./project-card.module.css";
import { IconBrandGithub, IconEye } from "@tabler/icons-react";

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    live: string;
    gitUrl: string;
    tech: string[];
}

export function ProjectCard({ item }: { item: ProjectCardProps }) {
    return (
        <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
                <Image
                    src={item.image}
                    alt={item.title}
                    height={200}
                    className={classes.image}
                />
            </Card.Section>

            <Box className={classes.links}>
                {item.gitUrl && (
                    <ActionIcon
                        radius="xl"
                        size={50}
                        variant="gradient"
                        gradient={{ from: "red", to: "yellow", deg: 90 }}
                    >
                        <IconBrandGithub stroke={2} />
                    </ActionIcon>
                )}
                {item.live && (
                    <ActionIcon
                        radius="xl"
                        size={50}
                        variant="gradient"
                        gradient={{ from: "red", to: "yellow", deg: 90 }}
                    >
                        <IconEye stroke={2} />
                    </ActionIcon>
                )}
            </Box>

            <Card.Section className={classes.section} mt="md">
                <Text fz="lg" fw={500}>
                    {item.title}
                </Text>
                <Text fz="sm" mt="xs">
                    {item.description}
                </Text>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Text mt="md" className={classes.label} c="dimmed">
                    Tech Stack
                </Text>
                <Group gap={7} mt={5}>
                    {item.tech.map((badge, index) => (
                        <Badge variant="light" key={index}>
                            {badge}
                        </Badge>
                    ))}
                </Group>
            </Card.Section>
        </Card>
    );
}
