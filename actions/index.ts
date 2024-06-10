"use server";

import { EmailTemplateForUser, EmailTemplateForAdmin } from "@/components";
import { Resend } from "resend";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    currentEmail: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMail(formData: FormData) {
    try {
        const { error } = await resend.emails.send({
            from: formData.currentEmail,
            to: [formData.email],
            subject: "Contact Form Submission",
            react: EmailTemplateForUser({ ...formData }) as React.ReactElement,
        });

        if (error) throw new Error();

        resend.emails.send({
            from: formData.currentEmail,
            to: [formData.currentEmail],
            subject: "New Inquiry from portfolio",
            react: EmailTemplateForAdmin({ ...formData }) as React.ReactElement,
        });

        return { success: true };
    } catch (error) {
        return { success: false, message: "Something went wrong!" };
    }
}
