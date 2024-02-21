import { Text, Container } from '@mantine/core';
import { HomeContactForm } from ".."

export function Contact() {
    return (
        <>
            <Container size={660} p={0}>
                <Text c="dimmed" mb={20}>
                    I am always open to new opportunities and meeting new people.
                </Text>
            </Container>
            <HomeContactForm />
        </>
    );
}