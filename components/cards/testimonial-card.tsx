import { Avatar, Text, Paper, Box } from "@mantine/core";

interface TestimonialCardProps {
  image: string;
  title: string;
  description: string;
  url: string;
  position: string;
  company: string;
}

export function TestimonialCard({ item }: { item: TestimonialCardProps }) {
  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      bg="var(--mantine-color-body)"
      mih={350}
    >
      <Avatar src={item.image} size={120} radius={120} mx="auto" />
      <Text ta="center" fz="lg" fw={500} mt="md">
        {item.title}
      </Text>
      <Box mt={5} mb={10}>
        <Text c="dimmed" fz="sm" ta="center">
          {item.position} @{" "}
          <Text
            ta="center"
            c="dimmed"
            fz="sm"
            component="a"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            td="underline"
          >
            {item.company}
          </Text>
        </Text>
      </Box>
      <Text fz="sm" ta="center">
        {item.description}
      </Text>
    </Paper>
  );
}
