interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Buenos días, {firstName}!</h1>
    <p>
      Eres un pedazo de <b>PUTARRACOX</b>.
    </p>
  </div>
);
