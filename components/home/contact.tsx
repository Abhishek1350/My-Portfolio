import { Image, Text, Container } from '@mantine/core';
import classes from './contact.module.css';
import { HomeContactForm } from ".."

export function Contact() {
    return (
        <>
            <Container size={660} p={0}>
                <Text c="dimmed" className={classes.description} mb={20}>
                    I am always open to new opportunities and meeting new people.
                </Text>
            </Container>
            <HomeContactForm />
        </>
    );
}