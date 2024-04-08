"use client";

import { useForm, isEmail, hasLength } from "@mantine/form";
import { Button, Group, TextInput, Box, Textarea } from "@mantine/core";

export function ContactForm() {
    const form = useForm({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
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
        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form.values),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    console.log("Email sent successfully");
                    form.reset();
                    // TODO: Show success message
                } else {
                    console.log("Failed to send email");
                }
            } else {
                console.log("Failed to send email");
            }
        } catch (error) {
            console.log("Failed to send email", error);
        }
    };

    return (
        <Box
            component="form"
            maw={600}
            mx="auto"
            onSubmit={form.onSubmit(() => {
                handleSendEmail();
            })}
        >
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
            <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </Box>
    );
}
