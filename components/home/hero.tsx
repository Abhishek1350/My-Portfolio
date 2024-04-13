"use client";

import { Image, Container, Title, Text, Box } from "@mantine/core";
import classes from "./hero.module.css";
import { WordAnimation, TextAppearAnimation, MotionDiv } from "..";
import { useRouter } from "next/navigation";
import { useSize } from "@/hooks";
import { IPersonalInfo } from "@/sanity/lib/types";
import { urlForImage } from "@/sanity/lib/image";

interface IHeroProps {
    data: IPersonalInfo;
}

export function Hero({ data }: IHeroProps) {
    const router = useRouter();
    const { width } = useSize();

    const { profleImage, name, slidingText, oneLiner } = data;

    const firstName = name.split(" ")[0];
    const profileImage = urlForImage(profleImage.asset) ?? "/home/profile.jpg";

    return (
        <Container size="lg">
            <Box className={classes.inner}>
                <Box className={classes.content}>
                    <Title order={1} className={classes.title} mb="md">
                        <TextAppearAnimation
                            text={`HI, I'm ${firstName}`}
                            center={width < 768 ? true : false}
                        />
                    </Title>
                    <Title order={2} className={classes.subtitle}>
                        <WordAnimation
                            words={slidingText}
                            className={classes.wordAnimation}
                        />
                    </Title>

                    <Text c="dimmed" mt="md" component="div">
                        <TextAppearAnimation
                            text={oneLiner}
                            center={width < 768 ? true : false}
                        />
                    </Text>

                    <MotionDiv direction="up">
                        <Box my="lg">
                            <button
                                type="button"
                                className={classes.readMoreBtn}
                                onClick={() => router.push("#skills")}
                            >
                                READ MORE
                            </button>
                        </Box>
                    </MotionDiv>
                </Box>
                <MotionDiv>
                    <Image
                        src={profileImage}
                        className={classes.image}
                        height={400}
                        alt={name}
                    />
                </MotionDiv>
            </Box>
        </Container>
    );
}
