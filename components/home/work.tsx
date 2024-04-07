import { ProjectCard, StaggerItem } from "..";
import { SimpleGrid } from "@mantine/core";
import { IProject } from "@/sanity/lib/types";
import { getProjects } from "@/sanity/lib/actions";

export const revalidate = 3600;

export async function RecentWork() {
    const projects: IProject[] = (await getProjects()).slice(0, 3);

    return (
        <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }} spacing={30} mt={50}>
            {projects.map((item, index) => {
                return (
                    <StaggerItem index={index} key={index}>
                        <ProjectCard item={item} />
                    </StaggerItem>
                );
            })}
        </SimpleGrid>
    );
}
