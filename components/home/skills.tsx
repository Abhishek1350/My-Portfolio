import { Image, Text, Container, ThemeIcon, SimpleGrid } from '@mantine/core';
import classes from './skills.module.css';

const data = [
  {
    image: 'auditors',
    title: 'Pharmacists',
    description: 'Azurill can be seen bouncing and playing on its big, rubbery tail',
  },
  {
    image: 'lawyers',
    title: 'Lawyers',
    description: 'Fans obsess over the particular length and angle of its arms',
  },
  {
    image: 'accountants',
    title: 'Bank owners',
    description: 'They divvy up their prey evenly among the members of their pack',
  },
  {
    image: 'others',
    title: 'Others',
    description: 'Phanpy uses its long nose to shower itself',
  },
];

export function Skills() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
        <Image src="/home/profile.jpg" />
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container className={classes.wrapper}>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          I'm proficient in a wide range of skills and technologies. Here are a few of them:
        </Text>
      </Container>

      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
    </Container>
  );
}