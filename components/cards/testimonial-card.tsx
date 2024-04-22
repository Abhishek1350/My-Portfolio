import { Avatar, Text, Paper, Box } from "@mantine/core";
import { ITestimonial } from "@/sanity/lib/types";
import { urlForImage } from "@/sanity/lib/image";
import styles from "./testimonial-card.module.css"

export function TestimonialCard({ item }: { item: ITestimonial }) {
  return (
    <Paper
      withBorder
      p="lg"
      className={styles.card}
    >
      <Box className={styles.content}>
        <Avatar
          src={urlForImage(item.image.asset)}
          size={120}
          radius={120}
          mx="auto"
        />
        <Text ta="center" fz="lg" fw={500} mt="md">
          {item.title}
        </Text>
        <Box mt={5} mb={10}>
          <Text c="dimmed" fz="sm" ta="center">
            {item.position} <br /> @{" "}
            <Text
              ta="center"
              c="dimmed"
              fz="sm"
              component="a"
              href={item.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              td="underline"
            >
              {item.companyName}
            </Text>
          </Text>
        </Box>
        <Text fz="sm" ta="center" lineClamp={8}>
          {item.description}
        </Text>
      </Box>
    </Paper>
  );
}
