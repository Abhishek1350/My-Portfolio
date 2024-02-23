import { Container, Group, ActionIcon, rem, Title, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandInstagram,
} from "@tabler/icons-react";
import classes from "./styles.module.css";
import Link from "next/link";
import { TypingEffect } from "./Typing-Effect";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container size="lg" className={classes.inner}>
        <Link href="/" className={classes.logoText}>
          <Text
            size="xl"
            fw={900}
            variant="gradient"
            gradient={{ from: "orange", to: "red", deg: 360 }}
          >
            ImAbhishek
          </Text>
        </Link>

        <Title order={6} size={20} miw={250}>
          Made with <TypingEffect />
        </Title>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon
            size="lg"
            radius="xl"
            component="a"
            href="https://iabhishek.tech"
            target="_black"
            variant="gradient"
            gradient={{
              from: "rgba(31, 30, 30, 1)",
              to: "rgba(31, 31, 31, 1)",
              deg: 0,
            }}
          >
            <IconBrandGithub
              style={{ width: rem(20), height: rem(20) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            radius="xl"
            component="a"
            href="https://iabhishek.tech"
            target="_black"
            variant="gradient"
            gradient={{ from: "rgba(0, 170, 255, 1)", to: "blue", deg: 270 }}
          >
            <IconBrandTwitter
              style={{ width: rem(20), height: rem(20) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            radius="xl"
            component="a"
            href="https://iabhishek.tech"
            target="_black"
            variant="gradient"
            gradient={{ from: "red", to: "grape", deg: 227 }}
          >
            <IconBrandInstagram
              style={{ width: rem(20), height: rem(20) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
