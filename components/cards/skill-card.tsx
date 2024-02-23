import { Text, UnstyledButton, Anchor, Avatar } from "@mantine/core";
import classes from "./skill-card.module.css";

interface SkillCardProps {
    title: string;
    icon: string;
    url: string;
}

export function SkillCard({ item }: { item: SkillCardProps }) {
    return (
        <Anchor href={item.url} target="_blank" underline="never">
            <UnstyledButton className={classes.item}>
                <Avatar src={item.icon} radius="md" alt={item.title} size={45}/>
                <Text size="sm" c="dimmed" fw={500}>
                    {item.title}
                </Text>
            </UnstyledButton>
        </Anchor>
    );
}
