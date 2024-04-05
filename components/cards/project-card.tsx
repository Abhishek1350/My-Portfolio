"use client";

import {
    Card,
    Image,
    Text,
    Group,
    ActionIcon,
    Box,
    Badge,
    Anchor,
} from "@mantine/core";
import classes from "./project-card.module.css";
import { IconBrandGithub, IconEye } from "@tabler/icons-react";
import { IProject } from "@/sanity/lib/types";
import { urlForImage } from "@/sanity/lib/image";

export function ProjectCard({ item }: { item: IProject }) {
    return (
        <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
                <Image
                    src={urlForImage(item.heroImage.asset)}
                    alt={item.title}
                    height={200}
                    className={classes.image}
                />
            </Card.Section>

            <Anchor href={item.liveUrl} target="_blank">
                <Box className={classes.links}>
                    {item.githubUrl && (
                        <ActionIcon
                            radius="xl"
                            size={50}
                            variant="gradient"
                            gradient={{ from: "red", to: "yellow", deg: 90 }}
                            onClick={() => window.open(item.githubUrl, "_blank")}
                        >
                            <IconBrandGithub stroke={2} />
                        </ActionIcon>
                    )}
                    {item.liveUrl && (
                        <ActionIcon
                            radius="xl"
                            size={50}
                            variant="gradient"
                            gradient={{ from: "red", to: "yellow", deg: 90 }}
                            onClick={() => window.open(item.liveUrl, "_blank")}
                        >
                            <IconEye stroke={2} />
                        </ActionIcon>
                    )}
                </Box>
            </Anchor>

            <Card.Section className={classes.section} mt="md">
                <Text fz="lg" fw={500}>
                    {item.title}
                </Text>
                <Text fz="sm" mt="xs" lineClamp={2}>
                    {item.description}
                </Text>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Text mt="md" className={classes.label} c="dimmed">
                    Tech Stack
                </Text>
                <Group gap={7} mt={5}>
                    {item.technologies.map((badge: string, index: number) => (
                        <Badge variant="light" key={index}>
                            {badge}
                        </Badge>
                    ))}
                </Group>
            </Card.Section>
        </Card>
    );
}
