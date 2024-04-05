import { TestimonialCard, StaggerItem } from "..";
import { SimpleGrid } from "@mantine/core";
import { ITestimonial } from "@/sanity/lib/types";

export function Testimonials({ data }: { data: ITestimonial[] }) {
    return (
        <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }} spacing={30} mt={50}>
            {data.map((item, index) => {
                return (
                    <StaggerItem index={index} key={item._id}>
                        <TestimonialCard item={item} />
                    </StaggerItem>
                );
            })}
        </SimpleGrid>
    );
}
