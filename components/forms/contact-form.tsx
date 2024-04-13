"use client";

import { useForm, isEmail, hasLength } from "@mantine/form";
import {
    Group,
    TextInput,
    Box,
    Textarea,
    LoadingOverlay,
    Loader,
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
                        {loading ? <Loader size={24} /> : "Submit"}
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
