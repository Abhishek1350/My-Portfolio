import { Text, UnstyledButton, Anchor, Avatar } from "@mantine/core";
import classes from "./skill-card.module.css";
import { ISkill } from "@/sanity/lib/types";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

export function SkillCard({ item }: { item: ISkill }) {
    return (
        <Anchor href={item.link} target="_blank" underline="never" className={classes.wrapper}>
            <UnstyledButton className={classes.item}>
                <Image
                    src={urlForImage(item.image.asset)}
                    alt={item.title}
                    width={50}
                    height={50}
                />
                <Text size="sm" c="dimmed" fw={500}>
                    {item.title}
                </Text>
            </UnstyledButton>
        </Anchor>
    );
}
