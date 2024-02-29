import { EmailTemplate } from "@/components";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "hello@iabhishek.tech",
      to: [formData.email],
      subject: "Test email from Resend API",
      react: EmailTemplate({ name: "John" }) as React.ReactElement,
    });

    if (error) throw new Error();

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}
