"use client"

import { Image, Container, Title, Button, Text, Box } from '@mantine/core';
import classes from './hero.module.css';
import { WordAnimation, TextAppearAnimation } from '..';
import { useRouter } from 'next/navigation';
import { useSize } from '@/hooks';

export function Hero() {
    const router = useRouter();
    const { width } = useSize();

    return (
        <Container size="lg">
            <Box className={classes.inner}>
                <Box className={classes.content}>
                    <Title order={1} className={classes.title} mb="md">
                        <TextAppearAnimation text='HI, I am Abhishek' center={width < 768 ? true : false} />
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
                        <TextAppearAnimation text='I am adept in React, Redux, Material UI, and Bootstrap. Right now I am toiling as a Software Engineer at an startup.' center={width < 768 ? true : false}/>
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
                    className={classes.image}
                    height={400}
                />
            </Box>
        </Container>
    )
}
