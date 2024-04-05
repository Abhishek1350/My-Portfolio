import {
  Title,
  Container,
  SimpleGrid,
} from "@mantine/core";
import classes from "./skills-experience.module.css";
import { ExpTimeline } from "./exp-timeline";
import { TextAppearAnimation, StaggerItem } from "..";
import { SkillCard } from "../cards/skill-card";
import { ISkill, IExperience } from "@/sanity/lib/types";


interface ISkillsExperienceProps {
  skills: ISkill[];
  experiences: IExperience[];
}

export function SkillsExperience({ skills, experiences }: ISkillsExperienceProps) {

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
            skills.map((item: ISkill, index: number) => (
              <StaggerItem index={index} key={index}>
                <SkillCard item={item} />
              </StaggerItem>
            ))
          }
        </SimpleGrid>
        <ExpTimeline data={experiences} />
      </SimpleGrid>
    </Container>
  );
}
