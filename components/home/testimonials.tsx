
import { TestimonialCard, StaggerItem } from ".."
import { SimpleGrid } from "@mantine/core"

const data = [
    {
        image: 'https://avatars.githubusercontent.com/u/72749432?v=4',
        title: 'Abhishek Bhardwaj',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla eveniet quo fugit iure aperiam adipisci quas alias autem eligendi. Deleniti.',
        url: 'https://iabhishek.tech',
        position:"Founder",
        company:"iAbhishek"
    },
    {
        image: 'https://avatars.githubusercontent.com/u/72749432?v=4',
        title: 'Abhishek Bhardwaj',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla eveniet quo fugit iure aperiam adipisci quas alias autem eligendi. Deleniti.',
        url: 'https://iabhishek.tech',
        position:"CEO",
        company:"iAbhishek"
    },
    {
        image: 'https://avatars.githubusercontent.com/u/72749432?v=4',
        title: 'Abhishek Bhardwaj',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla eveniet quo fugit iure aperiam adipisci quas alias autem eligendi. Deleniti.',
        url: 'https://iabhishek.tech',
        position:"Tech Lead",
        company:"iAbhishek"
    },
];

export function Testimonials() {
    return (
        <SimpleGrid cols={{ base: 1, xs: 2, md:3 }} spacing={30} mt={50}>
            {data.map((item, index) => {
                return (
                    <StaggerItem index={index} key={index}>
                        <TestimonialCard item={item}/>
                    </StaggerItem>
                );
            })}
        </SimpleGrid>
    );
};