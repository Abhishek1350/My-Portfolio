"use client"

import { Image, Container, Title, Button, Text, Box } from '@mantine/core';
import classes from './hero.module.css';
import { WordAnimation, TextAppearAnimation } from '..';
import { useRouter } from 'next/navigation';

export function Hero() {
    const router = useRouter();

    return (
        <Container size="lg">
            <Box className={classes.inner}>
                <Box className={`${classes.content} animate-from-left`}>
                    <Title order={1} className={classes.title} mb="md">
                        <TextAppearAnimation text='HI, I am Abhishek' />
                    </Title>
                    <Title order={2} className={classes.subtitle}>
                        <WordAnimation
                            words={[
                                'ReactJS Developer',
                                'NextJS Developer',
                            ]}
                            className={classes.wordAnimation}
                        />
                    </Title>
                    <Text c="dimmed" mt="md" component="div">
                        <TextAppearAnimation text='I am adept in React, Redux, Material UI, and Bootstrap. Right now I am toiling as a Software Engineer at an startup.' />
                    </Text>

                    <Button
                        variant="gradient"
                        gradient={{ from: 'lime', to: 'green', deg: 67 }}
                        radius="sm"
                        size="md"
                        my="lg"
                        className={classes.control}
                        onClick={() => router.push('/about')}
                    >
                        READ MORE
                    </Button>
                </Box>
                <Image
                    src="/home/profile.jpg"
                    className={`${classes.image} animate-from-right delay-5`}
                    height={400}
                />
            </Box>
        </Container>
    )
}
