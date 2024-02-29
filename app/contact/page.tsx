import {
  TextAppearAnimation,
  ContactForm,
  ContactIconsList,
} from "@/components";
import {
  Text,
  Title,
  SimpleGrid,
  Group,
  ActionIcon,
  Container,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import styles from "./styles.module.css";

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export default function ContactPage() {
  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={styles.social}
      variant="transparent"
    >
      <Icon size="1.4rem" stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <main className={styles.section}>
      <Container size="lg" className={styles.wrapper}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div>
            <Title className={styles.title}>
              <TextAppearAnimation text="Contact us" />
            </Title>
            <Text className={styles.description} mt="sm" mb={30}>
              <TextAppearAnimation text="Leave your email and we will get back to you within 24 hours" />
            </Text>
            <ContactIconsList />
            <Group mt="xl">{icons}</Group>
          </div>
          <div className={styles.form}>
            <ContactForm />
          </div>
        </SimpleGrid>
      </Container>
    </main>
  );
}
