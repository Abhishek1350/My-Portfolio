"use client";
import { Text, Timeline } from "@mantine/core";
import {
    IconGitBranch,
    IconGitCommit,
    IconGitPullRequest,
    IconMessageDots,
} from "@tabler/icons-react";
import classes from './skills-experience.module.css';
import { StaggerItem } from "..";

interface TimeLineData {
    company: string;
    role: string;
    duration: string;
    description: string;
}

export function ExpTimeline({ data }: { data: TimeLineData[] }) {
    return (
        <Timeline color="red" active={data.length} bulletSize={50}>
            {data.map((item, index) => (
                <Timeline.Item
                    bullet={
                        index === 0 ? (
                            <IconGitBranch />
                        ) : index === 1 ? (
                            <IconGitCommit />
                        ) : index === 2 ? (
                            <IconGitPullRequest />
                        ) : (
                            <IconMessageDots />
                        )
                    }
                    title={item.company}
                    key={index}
                    className={classes.timelineItem}
                >
                    <StaggerItem index={index} key={index}>
                        <Text c="dimmed" size="sm">
                            {item.role}
                        </Text>
                        <Text c="dimmed" size="sm">
                            {item.description}
                        </Text>
                        <Text size="xs" mt={4}>
                            {item.duration}
                        </Text>
                    </StaggerItem>
                </Timeline.Item>
            ))}
        </Timeline>
    );
}
