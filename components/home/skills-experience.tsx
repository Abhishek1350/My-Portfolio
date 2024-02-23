import {
  Title,
  Container,
  SimpleGrid,
} from "@mantine/core";
import classes from "./skills-experience.module.css";
import { ExpTimeline } from "./exp-timeline";
import { TextAppearAnimation, StaggerItem } from "..";
import { SkillCard } from "../cards/skill-card";

const Skillsdata = [
  { title: 'NextJS', icon: "https://avatars.githubusercontent.com/u/72749432?v=4", url: "https://iabhishek.tech" },
  { title: 'ReactJS', icon: "https://avatars.githubusercontent.com/u/72749432?v=4", url: "https://iabhishek.tech" },
  { title: 'TypeScript', icon: "https://avatars.githubusercontent.com/u/72749432?v=4", url: "https://iabhishek.tech" },
  { title: 'JavaScript', icon: "https://avatars.githubusercontent.com/u/72749432?v=4", url: "https://iabhishek.tech" },
  { title: 'NodeJS', icon: "https://avatars.githubusercontent.com/u/72749432?v=4", url: "https://iabhishek.tech" },
  { title: 'Material UI', icon: "https://avatars.githubusercontent.com/u/72749432?v=4", url: "https://iabhishek.tech" },
  { title: 'Bootstrap', icon: "https://avatars.githubusercontent.com/u/72749432?v=4", url: "https://iabhishek.tech" },
  { title: 'Tailwind', icon: "https://avatars.githubusercontent.com/u/72749432?v=4", url: "https://iabhishek.tech" },
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
        spacing={80}
        mt={50}
        style={{ height: "fit-content" }}
      >
        <SimpleGrid cols={{ base: 3, xs: 4 }} spacing={50}>
          {
            Skillsdata.map((item, index) => (
              <StaggerItem index={index} key={index}>
                <SkillCard item={item} />
              </StaggerItem>
            ))
          }
        </SimpleGrid>
        <ExpTimeline data={timeLineData} />
      </SimpleGrid>
    </Container>
  );
}
