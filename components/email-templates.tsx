import { Html, Text } from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function EmailTemplateForUser({ name, subject, message }: EmailTemplateProps) {
  return (
    <Html lang="en">
      <Text>Dear {name},</Text>
      <Text>I have received your email.</Text>
      <Text>I appreciate your interest and will get back to you as soon as possible regarding your inquiry.</Text>
      <Text>Subject: {subject}</Text>
      <Text>Message: {message}</Text>
      <Text>Best regards,</Text>
      <Text>Abhishek Bhardwaj</Text>
    </Html>
  );
};

export function EmailTemplateForAdmin({ name, email, subject, message }: EmailTemplateProps) {
  return (
    <Html lang="en">
      <Text>Hey, you got a new message from your portfolio!</Text>
      <Text>Subject: {subject}</Text>
      <Text>Message: {message}</Text>
      <Text>From: {name}, ({email})</Text>
    </Html>
  );
};

