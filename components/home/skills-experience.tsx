import {
  Image,
  Text,
  Title,
  Container,
  ThemeIcon,
  SimpleGrid,
} from "@mantine/core";
import classes from "./skills-experience.module.css";
import { ExpTimeline } from "./exp-timeline";
import { TextAppearAnimation, StaggerItem } from "..";

const Skillsdata = [
  {
    image: "auditors",
    title: "Pharmacists",
  },
  {
    image: "lawyers",
    title: "Lawyers",
  },
  {
    image: "accountants",
    title: "Bank owners",
  },
  {
    image: "others",
    title: "Others",
  },
  {
    image: "others",
    title: "Others",
  },
  {
    image: "others",
    title: "Others",
  },
];

const timeLineData = [
  {
    company: "Google",
    role: "Software Engineer",
    duration: "2017 - 2019",
    description: "Worked on the Google search engine",
    companyLogo: "https://avatars.githubusercontent.com/u/72749432?v=4",
  },
  {
    company: "Facebook",
    role: "Software Engineer",
    duration: "2019 - 2021",
    description: "Worked on the Facebook search engine",
    companyLogo: "https://avatars.githubusercontent.com/u/72749432?v=4",
  },
  {
    company: "Amazon",
    role: "Software Engineer",
    duration: "2021 - Present",
    description: "Working on the Amazon search engine",
    companyLogo: "https://avatars.githubusercontent.com/u/72749432?v=4",
  },
];

export function SkillsExperience() {
  const SkillItems = Skillsdata.map((item, index) => (
    <StaggerItem index={index} key={index}>
      <div className={classes.item}>
        <ThemeIcon
          variant="light"
          className={classes.itemIcon}
          size={60}
          radius="md"
        >
          <Image src="/home/profile.jpg" />
        </ThemeIcon>

        <Text fw={600} size="sm" className={classes.itemTitle}>
          {item.title}
        </Text>
      </div>
    </StaggerItem>
  ));

  return (
    <Container size="lg">
      <Container size={660} p={0}>
        <Title c="dimmed" order={5} fw={400} className={classes.description}>
          <TextAppearAnimation
            text=" I am proficient in a wide range of skills and technologies. Here are a few of them:"
            center
          />
        </Title>
      </Container>

      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        spacing={50}
        mt={50}
        style={{ height: "fit-content" }}
      >
        <SimpleGrid cols={{ base: 3, xs: 4 }} spacing={50}>
          {SkillItems}
        </SimpleGrid>
        <ExpTimeline data={timeLineData} />
      </SimpleGrid>
    </Container>
  );
}
