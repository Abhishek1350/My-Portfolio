import { ProjectCard, MotionDiv } from ".."
import { SimpleGrid } from "@mantine/core"


const data = [
    {
        image: 'https://cdn.sanity.io/images/wpw9cxdm/production/07aa735a1af9e47db2c14f122ffd8ccc4bba70a5-1903x931.png',
        title: 'Free Games Hub',
        description: 'A collection of free games to play online',
        live: 'https://www.iabhishek.tech/',
        gitUrl: 'https://www.iabhishek.tech/',
        tech: ["ReactJs", "NextJs"]
    },
    {
        image: 'https://cdn.sanity.io/images/wpw9cxdm/production/07aa735a1af9e47db2c14f122ffd8ccc4bba70a5-1903x931.png',
        title: 'Free Games Hub',
        description: 'A collection of free games to play online',
        live: 'https://www.iabhishek.tech/',
        gitUrl: 'https://www.iabhishek.tech/',
        tech: ["ReactJs", "NextJs"]
    },
    {
        image: 'https://cdn.sanity.io/images/wpw9cxdm/production/07aa735a1af9e47db2c14f122ffd8ccc4bba70a5-1903x931.png',
        title: 'Free Games Hub',
        description: 'A collection of free games to play online',
        live: 'https://www.iabhishek.tech/',
        gitUrl: 'https://www.iabhishek.tech/',
        tech: ["ReactJs", "NextJs"]
    },
];

export function RecentWork() {
    return (
        <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }} spacing={30} mt={50}>
            {data.map((item, index) => {
                return (
                    <MotionDiv index={index}>
                        <ProjectCard item={item} />
                    </MotionDiv>
                );
            })}
        </SimpleGrid>
    );
};