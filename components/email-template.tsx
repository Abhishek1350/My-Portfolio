interface EmailTemplateProps {
  name : string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
}) => (
  <div>
    <h1>Welcome, {name}!</h1>
    <p>
      Thanks for signing up to our platform. We're excited to have you on board.
    </p>
  </div>
);

export default EmailTemplate;