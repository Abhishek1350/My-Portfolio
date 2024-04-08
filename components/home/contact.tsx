import { Title, Container } from '@mantine/core';
import { ContactForm, TextAppearAnimation } from ".."

export function Contact() {
    return (
        <>
            <Container size={660} p={0}>
                <Title c="dimmed" order={5} fw={400} mb={20}>
                    <TextAppearAnimation
                        text='I am always open to new opportunities and meeting new people.'
                        center
                    />
                </Title>
            </Container>
            <ContactForm />
        </>
    );
}