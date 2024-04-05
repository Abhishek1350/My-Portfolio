import { Text, UnstyledButton, Anchor, Avatar } from "@mantine/core";
import classes from "./skill-card.module.css";
import { ISkill } from "@/sanity/lib/types";
import { urlForImage } from "@/sanity/lib/image";

export function SkillCard({ item }: { item: ISkill }) {
    return (
        <Anchor href={item.link} target="_blank" underline="never">
            <UnstyledButton className={classes.item}>
                <Avatar
                    src={urlForImage(item.image.asset)}
                    radius="md"
                    alt={item.title}
                    size={45}
                />
                <Text size="sm" c="dimmed" fw={500}>
                    {item.title}
                </Text>
            </UnstyledButton>
        </Anchor>
    );
}
