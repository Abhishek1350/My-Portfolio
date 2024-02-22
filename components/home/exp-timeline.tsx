"use client";
import { Text, Timeline, Avatar } from "@mantine/core";
import classes from "./skills-experience.module.css";
import { StaggerItem } from "..";

interface TimeLineData {
    company: string;
    role: string;
    duration: string;
    description: string;
    companyLogo: string;
}

export function ExpTimeline({ data }: { data: TimeLineData[] }) {
    return (
        <Timeline  bulletSize={50}>
            {data.map((item, index) => (
                <Timeline.Item
                    bullet={
                            <Avatar
                                size={45}
                                radius="xl"
                                src={item.companyLogo}
                            />
                    }
                    title={item.company}
                    key={index}
                    className={classes.timelineItem}
                >
                    <StaggerItem index={index} key={index}>
                        <div className={classes.timeLineItemContent}>
                            <Text c="dimmed" size="sm">
                                {item.role}
                            </Text>
                            <Text c="dimmed" size="sm" mt={5} mb={7}>
                                {item.description}
                            </Text>
                            <Text size="xs">
                                {item.duration}
                            </Text>
                        </div>
                    </StaggerItem>
                </Timeline.Item>
            ))}
        </Timeline>
    );
}
