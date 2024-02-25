import {
  Container,
  Group,
  ActionIcon,
  rem,
  Title,
  Text,
  Avatar,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import classes from "./styles.module.css";
import Link from "next/link";
import { TypingEffect } from "./Typing-Effect";
import { getSocialLinks } from "@/sanity/lib/actions";

interface SocialLink {
  _id: number;
  title: string;
  url: string;
}

const getSocialIcons = (title: string) => {
  switch (title) {
    case "GitHub":
      return (
        <IconBrandGithub
          style={{ width: rem(20), height: rem(20) }}
          stroke={1.5}
        />
      );
    case "Twitter":
      return (
        <IconBrandTwitter
          style={{ width: rem(20), height: rem(20) }}
          stroke={1.5}
        />
      );
    case "Instagram":
      return (
        <IconBrandInstagram
          style={{ width: rem(20), height: rem(20) }}
          stroke={1.5}
        />
      );
    default:
      return (
        <IconBrandLinkedin
          style={{ width: rem(20), height: rem(20) }}
          stroke={1.5}
        />
      );
  }
};

const getGradient = (title: string) => {
  switch (title) {
    case "GitHub":
      return {
        from: "rgba(31, 30, 30, 1)",
        to: "rgba(31, 31, 31, 1)",
        deg: 0,
      };
    case "Twitter":
      return { from: "rgba(0, 170, 255, 1)", to: "blue", deg: 270 };
    case "Instagram":
      return { from: "red", to: "grape", deg: 227 };
    default:
      return { from: "blue", to: "indigo", deg: 73 };
  }
};

export async function Footer() {
  const socialLinks: SocialLink[] = await getSocialLinks();

  const socialLinksList = socialLinks.map((link: SocialLink) => {
    return (
      <ActionIcon
        key={link._id}
        size="lg"
        radius="xl"
        component="a"
        href={link.url}
        target="_black"
        rel="noopener noreferrer"
        variant="gradient"
        gradient={getGradient(link.title)}
      >
        {getSocialIcons(link.title)}
      </ActionIcon>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container size="lg" className={classes.inner}>
        <Link href="/" className={classes.logo}>
          <Avatar
            radius="xl"
            src="/logo.webp"
            alt="Abhishek Bhardwaj Portfolio Logo"
            size={35}
          />
          <Text
            size="xl"
            fw={900}
            variant="gradient"
            gradient={{ from: "orange", to: "red", deg: 360 }}
          >
            ImAbhishek
          </Text>
        </Link>

        <Title order={6} size={20} miw={250} ta="center">
          Made with <TypingEffect />
        </Title>

        <Group
          gap="lg"
          justify="flex-end"
          wrap="nowrap"
          className={classes.social}
        >
          {socialLinksList}
        </Group>
      </Container>
    </footer>
  );
}
