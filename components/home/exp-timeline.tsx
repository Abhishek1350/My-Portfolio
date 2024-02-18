"use client";
import { Text, Timeline } from "@mantine/core";
import {
    IconGitBranch,
    IconGitCommit,
    IconGitPullRequest,
    IconMessageDots,
} from "@tabler/icons-react";
import classes from './skills-experience.module.css';

interface TimeLineData {
    company: string;
    role: string;
    duration: string;
    description: string;
}

export function ExpTimeline({ data }: { data: TimeLineData[] }) {
    return (
        <Timeline color="red" active={1} bulletSize={30}>
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
                    <Text c="dimmed" size="sm">
                        {item.role}
                    </Text>
                    <Text c="dimmed" size="sm">
                        {item.description}
                    </Text>
                    <Text size="xs" mt={4}>
                        {item.duration}
                    </Text>
                </Timeline.Item>
            ))}
        </Timeline>
    );
}
