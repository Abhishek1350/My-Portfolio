"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Card, Text, rem, Image, Button, Box } from "@mantine/core";
import classes from "./workSlider.module.css";
import { IconArrowRight } from '@tabler/icons-react';
import { motion } from "framer-motion"

const stagger = 0.50;
const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const data = [
    {
        image: 'https://cdn.sanity.io/images/wpw9cxdm/production/07aa735a1af9e47db2c14f122ffd8ccc4bba70a5-1903x931.png',
        title: 'Free Games Hub',
        path: 'https://www.iabhishek.tech/'
    },
    {
        image: 'https://cdn.sanity.io/images/wpw9cxdm/production/07aa735a1af9e47db2c14f122ffd8ccc4bba70a5-1903x931.png',
        title: 'Free Games Hub',
        path: 'https://www.iabhishek.tech/'
    },
    {
        image: 'https://cdn.sanity.io/images/wpw9cxdm/production/07aa735a1af9e47db2c14f122ffd8ccc4bba70a5-1903x931.png',
        title: 'Free Games Hub',
        path: 'https://www.iabhishek.tech/'
    },
    {
        image: 'https://cdn.sanity.io/images/wpw9cxdm/production/07aa735a1af9e47db2c14f122ffd8ccc4bba70a5-1903x931.png',
        title: 'Free Games Hub',
        path: 'https://www.iabhishek.tech/'
    },
    {
        image: 'https://cdn.sanity.io/images/wpw9cxdm/production/07aa735a1af9e47db2c14f122ffd8ccc4bba70a5-1903x931.png',
        title: 'Free Games Hub',
        path: 'https://www.iabhishek.tech/'
    },
    {
        image: 'https://cdn.sanity.io/images/wpw9cxdm/production/07aa735a1af9e47db2c14f122ffd8ccc4bba70a5-1903x931.png',
        title: 'Free Games Hub',
        path: 'https://www.iabhishek.tech/'
    },
];


const CustomPrevArrow = () => (
    <div
        className="swiper-button-prev"
        style={{
            padding: "0px",
            borderRadius: "50%",
            height: "20px",
            width: "20px",
            left: "10px",
        }}
    >
        <button className="next-button">
            <Image
                src="/arrow-right.svg"
                alt="FabWebStudio Logo"
                style={{ width: rem(26), height: rem(26), transform: "rotate(180deg)" }}
            />
        </button>
    </div>
);

const CustomNextArrow = () => (
    <div
        className="swiper-button-next"
        style={{
            padding: "0px",
            borderRadius: "50%",
            height: "20px",
            width: "20px",
            right: "10px",
        }}
    >
        <button className="next-button">
            <Image
                src="/arrow-right.svg"
                alt="FabWebStudio Logo"
                style={{ width: rem(26), height: rem(26) }}
            />
        </button>
    </div>
);

export function WorkSlider() {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            slidesPerGroup={1}
            modules={[Navigation]}
            navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
            }}
            breakpoints={{
                1000: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },

                550: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
            }}
        >
            <CustomPrevArrow />
            <CustomNextArrow />
            {data.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <motion.div
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                delay: index * stagger,
                                ease: "easeInOut",
                                duration: 0.5,
                            }}
                        >
                            <Card
                                p="lg"
                                shadow="lg"
                                className={classes.card}
                                radius="md"
                            >
                                <Box
                                    className={classes.image}
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                    }}
                                />
                                <Box className={classes.content}>
                                    <Text size="lg" className={classes.title} fw={600}>
                                        {item.title}
                                    </Text>
                                    <Button
                                        variant="gradient"
                                        gradient={{ from: 'lime', to: 'green', deg: 67 }}
                                        size="sm"
                                        radius="sm"
                                        component="a"
                                        href={item.path}
                                        target="_blank"
                                        rightSection={<IconArrowRight size={18} />}
                                    >
                                        Visit
                                    </Button>
                                </Box>
                            </Card>
                        </motion.div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};