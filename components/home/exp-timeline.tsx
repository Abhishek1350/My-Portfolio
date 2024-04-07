"use client";
import { Text, Timeline, Avatar } from "@mantine/core";
import classes from "./skills-experience.module.css";
import { StaggerItem } from "..";
import { IExperience } from "@/sanity/lib/types";
import { urlForImage } from "@/sanity/lib/image";
import moment from "moment";

export function ExpTimeline({ data }: { data: IExperience[] }) {
    return (
        <Timeline bulletSize={50}>
            {data.map((item, index) => (
                <Timeline.Item
                    bullet={
                        <Avatar
                            size={45}
                            radius="xl"
                            src={urlForImage(item?.companyLogo.asset)}
                            component="a"
                            href={item?.companyUrl}
                            alt={item?.companyName}
                            target="_blank"
                        />
                    }
                    title={item?.companyName}
                    key={item?._id}
                    className={classes.timelineItem}
                >
                    <StaggerItem index={index} key={item?._id}>
                        <div className={classes.timeLineItemContent}>
                            <Text c="dimmed" size="sm">
                                {item?.position}
                            </Text>
                            <Text c="dimmed" size="sm" mt={5} mb={7}>
                                {item?.description}
                            </Text>
                            <Text size="xs">
                                {moment(item?.startDate).format("MMM, YYYY")} -{" "}
                                {item?.endDate ? moment(item?.endDate).format("MMM, YYYY") : "Present"}
                            </Text>
                        </div>
                    </StaggerItem>
                </Timeline.Item>
            ))}
        </Timeline>
    );
}
