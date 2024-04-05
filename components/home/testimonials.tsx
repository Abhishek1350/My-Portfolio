import { TestimonialCard, StaggerItem } from "..";
import { SimpleGrid } from "@mantine/core";
import { ITestimonial } from "@/sanity/lib/types";
import { getTestimonials } from "@/sanity/lib/actions";

export async function Testimonials() {
    const testimonials: ITestimonial[] = await getTestimonials();

    return (
        <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }} spacing={30} mt={50}>
            {testimonials.map((item: ITestimonial, index) => {
                return (
                    <StaggerItem index={index} key={item._id}>
                        <TestimonialCard item={item} />
                    </StaggerItem>
                );
            })}
        </SimpleGrid>
    );
}
