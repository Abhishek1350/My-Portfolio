"use client";

import { Image, Container, Title, Text, Box, Modal } from "@mantine/core";
import classes from "./hero.module.css";
import { WordAnimation, TextAppearAnimation, MotionDiv } from "..";
import { useSize } from "@/hooks";
import { IPersonalInfo } from "@/sanity/lib/types";
import { urlForImage } from "@/sanity/lib/image";
import { useDisclosure } from "@mantine/hooks";

interface IHeroProps {
    data: IPersonalInfo;
}

export function Hero({ data }: IHeroProps) {
    const { width } = useSize();

    const { profleImage, name, slidingText, oneLiner, setupImage, moreInfo } =
        data;

    const firstName = name.split(" ")[0];
    const profileImg = urlForImage(profleImage.asset) ?? "/home/profile.jpg";
    const setupImg = urlForImage(setupImage.asset) ?? "/home/setup.jpg";

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <Container size="lg">
            <Box className={classes.inner}>
                <Box>
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
                    </Box>
                    <MotionDiv direction="right">
                        <Box my="lg">
                            <button
                                type="button"
                                className={classes.readMoreBtn}
                                onClick={open}
                            >
                                <strong>Read More</strong>
                                <div className={classes.containerStars}>
                                    <div className={classes.stars}></div>
                                </div>

                                <div className={classes.glow}>
                                    <div className={classes.circle}></div>
                                    <div className={classes.circle}></div>
                                </div>
                            </button>
                        </Box>
                    </MotionDiv>
                </Box>
                <MotionDiv>
                    <Image src={profileImg} className={classes.image} alt={name} />
                </MotionDiv>
            </Box>

            <Modal
                opened={opened}
                size="xl"
                onClose={close}
                title="More info"
                centered
            >
                <Box className={classes.modal}>
                    <Image
                        src={setupImg}
                        className={classes.image}
                        alt={`${name} setup`}
                    />
                    <Box className={classes.content}>
                        <Text className={classes.title} component="div">
                            <TextAppearAnimation
                                text={"My Journey in a nutshell"}
                                center={width < 768 ? true : false}
                            />
                        </Text>
                        <Text c="dimmed" my="md" component="div">
                            <TextAppearAnimation
                                text={moreInfo}
                                center={width < 768 ? true : false}
                            />
                        </Text>
                    </Box>
                </Box>
            </Modal>
        </Container>
    );
}
