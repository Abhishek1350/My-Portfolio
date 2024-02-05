"use client"

import { Image, Container, Title, Button, Text, Box } from '@mantine/core';
import classes from './hero.module.css';
import { WordAnimation } from '..';
import { useRouter } from 'next/navigation';

export function Hero() {
    const router = useRouter();

    return (
        <Container size="lg">
            <Box className={classes.inner}>
                <Box className={`${classes.content} animate-from-left`}>
                    <Title order={2} className={classes.subtitle}>
                        EXPERTS IN DESIGN, BUILD &
                    </Title>
                    <Title className={classes.title}>
                        <WordAnimation
                            words={[
                                'LAUNCH',
                                'SCALE',
                                'GROW',
                            ]}
                            className={classes.wordAnimation}
                        />
                    </Title>
                    <Text c="dimmed" mt="md">
                        OUR AIM IS TO ASSIST AND ADVISE—SO YOU CAN WORK SMARTER, NOT HARDER.
                    </Text>
                    <Button
                        variant="gradient"
                        gradient={{ from: 'lime', to: 'green', deg: 67 }}
                        radius="sm"
                        size="md"
                        my="lg"
                        className={classes.control}
                        onClick={() => router.push('/about-us')}
                    >
                        READ MORE
                    </Button>
                </Box>
                <Image
                    src="/home/hero-image.svg"
                    className={`${classes.image} animate-from-right delay-5`}
                />
            </Box>
        </Container>
    )
}
