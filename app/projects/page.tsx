import { TextAppearAnimation, ProjectCard, StaggerItem } from "@/components";
import { Container, Title, SimpleGrid } from "@mantine/core";
import styles from "./styles.module.css";
import { getProjects } from "@/sanity/lib/actions";
import { IProject } from "@/sanity/lib/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects Showcase | Abhishek's Portfolio | ReactJS Developer/NextJS Developer",
    description:
        "Explore a diverse collection of cutting-edge projects crafted by Abhishek Bhardwaj, a proficient ReactJS Developer/NextJS developer. Delve into web applications built with ReactJS, NextJS, Redux, Material UI, TailwindCSS, and other modern technologies. From innovative UI/UX designs to seamless user experiences, discover the expertise and creativity behind each project showcased in this portfolio.",
        openGraph: {
            type: "website",
            locale: "en_US",
            title:
              "Projects Showcase | Abhishek's Portfolio | ReactJS Developer/NextJS Developer",
            description:
              "Explore a diverse collection of cutting-edge projects crafted by Abhishek Bhardwaj, a proficient ReactJS Developer/NextJS developer. Delve into web applications built with ReactJS, NextJS, Redux, Material UI, TailwindCSS, and other modern technologies. From innovative UI/UX designs to seamless user experiences, discover the expertise and creativity behind each project showcased in this portfolio.",
            images: [
              {
                url: "/og-image.png",
                alt: "Abhishek Bhardwaj | Expert Software Developer based in Himachal Pradesh, India",
              },
            ],
          },
};

export const revalidate = 3600;

export default async function Projects() {
    const projects: IProject[] = await getProjects();

    return (
        <main className={styles.section}>
            <Container size="lg">
                <Title order={2} className={styles.title}>
                    <TextAppearAnimation text="Projects" center />
                </Title>
                <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }} spacing={30} mt={50}>
                    {projects.map((item, index) => {
                        return (
                            <StaggerItem index={index} key={item._id}>
                                <ProjectCard item={item} />
                            </StaggerItem>
                        );
                    })}
                </SimpleGrid>
            </Container>
        </main>
    );
}
