import { EmailTemplateForUser, EmailTemplateForAdmin } from "@/components";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.json();
  try {
    const { error } = await resend.emails.send({
      from: formData.currentEmail,
      to: [formData.email],
      subject: "IAbhishek.tech - Contact Form Submission",
      react: EmailTemplateForUser({ ...formData }) as React.ReactElement,
    });

    await resend.emails.send({
      from: formData.currentEmail,
      to: [formData.currentEmail],
      subject: "New Inquiry from portfolio",
      react: EmailTemplateForAdmin({ ...formData }) as React.ReactElement,
    });

    if (error) throw new Error();

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error: "Something went wrong!" });
  }
}
