"use client";

import { useForm, isEmail, hasLength } from "@mantine/form";
import {
    Group,
    TextInput,
    Box,
    Textarea,
    LoadingOverlay,
    Dialog,
} from "@mantine/core";
import styles from "./contact-form.module.css";
import { useState } from "react";
import { CommonLoader, TextAppearAnimation } from "@/components";
import { useDisclosure } from "@mantine/hooks";

export function ContactForm({ currentEmail }: { currentEmail: string }) {
    const [loading, setLoading] = useState(false);
    const [opened, { toggle, close }] = useDisclosure(false);
    const [dialogMessage, setDialogMessage] = useState(
        "Message sent successfully!"
    );
    const [sent, setSent] = useState(false);

    const form = useForm({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
            currentEmail,
        },

        validate: {
            name: hasLength({ min: 2, max: 10 }, "Name must be 2-10 characters long"),
            email: isEmail("Please include a valid email address"),
            subject: hasLength(
                { min: 4 },
                "Subject must be at least 4 characters long"
            ),
            message: hasLength(
                { min: 10, max: 200 },
                "Message must be 10-200 characters long"
            ),
        },
    });

    const handleSendEmail = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form.values),
            });

            if (!response.ok) {
                return setDialogMessage("Something went wrong, please try again later");
            }

            const data = await response.json();

            if (!data.success) {
                return setDialogMessage(
                    data?.message || "Something went wrong, please try again later"
                );
            }

            toggle();
            setSent(true);
            setDialogMessage("Message sent successfully!");
            setTimeout(() => {
                close();
            }, 5000);
            form.reset();
        } catch (error) {
            setDialogMessage("Something went wrong, please try again later");
        }
        setLoading(false);
    };

    return (
        <Box
            component="form"
            maw={700}
            mx="auto"
            onSubmit={form.onSubmit(() => {
                handleSendEmail();
            })}
            pos="relative"
            p={loading ? 10 : 0}
        >
            <LoadingOverlay
                visible={loading}
                opacity={0.5}
                loaderProps={{ children: <CommonLoader /> }}
            />
            <TextInput
                label="Your Name"
                placeholder="Your Name"
                withAsterisk
                {...form.getInputProps("name")}
            />
            <TextInput
                label="Your email"
                placeholder="Your email"
                withAsterisk
                mt="md"
                {...form.getInputProps("email")}
            />
            <TextInput
                label="Subject"
                placeholder="Subject"
                withAsterisk
                mt="md"
                {...form.getInputProps("subject")}
            />
            <Textarea
                label="Your message"
                placeholder="Please include all relevant information"
                withAsterisk
                mt="md"
                minRows={5}
                {...form.getInputProps("message")}
            />
            {!sent ? (
                <Group justify="flex-end" mt="lg">
                    <button type="submit" className={styles.submitBtn}>
                        <div className={styles.svgWrapper}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    fill="currentColor"
                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                ></path>
                            </svg>
                        </div>
                        <span>Send</span>
                    </button>
                </Group>
            ) : (
                <Box mt="lg">
                    <TextAppearAnimation text={dialogMessage} center={true} />
                </Box>
            )}

            <Dialog
                opened={opened}
                withCloseButton
                bg={sent ? "teal" : "red"}
                onClose={close}
                size="lg"
                radius="md"
            >
                <TextAppearAnimation text={dialogMessage} center={true} />
            </Dialog>
        </Box>
    );
}
