import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVericationEmail = async (email: string, token: string) => {
  const confirmlink = `http://localhost:3000/api/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email",
    html: `<p>Click <a href="${confirmlink}">here</a> to confirm your email.</p>`,
  });
};
