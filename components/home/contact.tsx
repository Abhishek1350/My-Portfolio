import { Image, Text, Container } from '@mantine/core';
import classes from './contact.module.css';
import { HomeContactForm } from ".."

export function Contact() {
    return (
        <Container size="lg">
            <Container size={660} p={0}>
                <Text c="dimmed" className={classes.description}>
                    I am always open to new opportunities and meeting new people. If you have any questions, or just want to say hi, feel free to send me a message. I will try to get back to you as soon as possible.
                </Text>
            </Container>
            <HomeContactForm />
        </Container>
    );
}