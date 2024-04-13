"use client";

import { Card, Image, Text, Badge } from "@mantine/core";
import classes from "./blog-card.module.css";
import { IBlog } from "@/sanity/lib/types";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

export function BlogCard({ item }: { item: IBlog }) {
  return (
    <Card
      withBorder
      radius="md"
      className={classes.card}
      component={Link}
      href={`/blogs/${item.slug.current}`}
    >
      <Card.Section>
        <Image
          src={urlForImage(item.heroImage.asset)}
          height={180}
          className={classes.image}
          alt={item.title}
        />
      </Card.Section>

      <Badge
        className={classes.tag}
        variant="gradient"
        gradient={{ from: "yellow", to: "red" }}
      >
        {item.tags.join(", ")}
      </Badge>

      <Text className={classes.title} fw={500}>
        {item.title}
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={3}>
        {item.metadesc}
      </Text>

      <Text fz="sm" mt={10}>
        {item.minRead} min read
      </Text>
    </Card>
  );
}
