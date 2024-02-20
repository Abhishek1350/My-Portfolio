import {
  Card,
  Image,
  Text,
  Badge,
  Group,
  Center,
  Avatar,
} from '@mantine/core';
import classes from './blog-card.module.css';

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  tag: string;
  minRead: string;
}

export function BlogCard({ item }: { item: BlogCardProps }) {
  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <Image src={item.image} height={180} className={classes.image} />
      </Card.Section>

      <Badge className={classes.tag} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
        {item.tag}
      </Badge>

      <Text className={classes.title} fw={500}>
        {item.title}
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={3}>
        {item.description}
      </Text>

      <Text fz="sm" mt={10}>
        {item.minRead}
      </Text>

    </Card>
  );
}