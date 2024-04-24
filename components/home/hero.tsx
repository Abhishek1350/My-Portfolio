"use client";

import {
  Image,
  Container,
  Title,
  Text,
  Box,
  Modal,
  Group,
} from "@mantine/core";
import classes from "./hero.module.css";
import { WordAnimation, TextAppearAnimation, MotionDiv } from "..";
import { useSize } from "@/hooks";
import { IPersonalInfo } from "@/sanity/lib/types";
import { urlForImage } from "@/sanity/lib/image";
import { useDisclosure } from "@mantine/hooks";

interface IHeroProps {
  data: IPersonalInfo;
  resumeUrl: string;
}

export function Hero({ data, resumeUrl }: IHeroProps) {
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
          <Group my="lg" gap={20} className={classes.btns}>
            <MotionDiv direction="right">
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
            </MotionDiv>
            {resumeUrl && (
              <MotionDiv direction="left">
                <button
                  type="button"
                  className={classes.resumeBtn}
                  onClick={() => window.open(resumeUrl, "_blank")}
                >
                  Resume
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="20"
                    viewBox="0 0 640 512"
                    className={classes.icon}
                  >
                    <path
                      d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                      fill="white"
                    ></path>
                  </svg>
                </button>
              </MotionDiv>
            )}
          </Group>
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
