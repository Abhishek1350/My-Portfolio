import { ProjectCard, StaggerItem } from "..";
import { SimpleGrid } from "@mantine/core";
import { IProject } from "@/sanity/lib/types";

export function RecentWork({ projects }: { projects: IProject[] }) {
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
