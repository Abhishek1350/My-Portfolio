import {
  TextAppearAnimation,
  ContactForm,
  ContactIconsList,
  StaggerItem
} from "@/components";
import {
  Title,
  SimpleGrid,
  Group,
  ActionIcon,
  Container,
  rem,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import styles from "./styles.module.css";
import { getSocialLinks } from "@/sanity/lib/actions";

interface SocialLink {
  _id: number;
  title: string;
  url: string;
}

export const revalidate = 3600;

export default async function ContactPage() {
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

  const socialLinks: SocialLink[] = await getSocialLinks();

  const socialLinksList = socialLinks.map((link: SocialLink, index) => {
    return (
      <StaggerItem index={index} key={link._id}>
        <ActionIcon
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
      </StaggerItem>
    );
  });

  return (
    <main className={styles.section}>
      <Title className={styles.title}>
        <TextAppearAnimation text="Contact" center />
      </Title>
      <Container size="lg" className={styles.wrapper}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div>
            <Title
              className={styles.description}
              mt="sm"
              mb={30}
              order={6}
              fw={400}
            >
              <TextAppearAnimation text="Leave your email and I will get back to you within 24 hours" />
            </Title>
            <ContactIconsList />
            <Group mt="xl">{socialLinksList}</Group>
          </div>
          <div className={styles.form}>
            <ContactForm />
          </div>
        </SimpleGrid>
      </Container>
    </main>
  );
}
