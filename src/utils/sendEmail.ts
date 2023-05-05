import { createTransport } from "nodemailer";
import "dotenv/config";
import Mailgen from "mailgen";
import AppError from "../errors/appError";
import { ISendEmail } from "../interfaces/user.interface";

class SendEmailService {
    async sendEmail({ to, subject, text }: ISendEmail) {
        const transporter = createTransport({
            host: "smtp.gmail.com",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter
            .sendMail({
                from: process.env.SMTP_USER,
                to,
                subject,
                text: text,
            })
            .then(() => console.log("E-mail enviando"))
            .catch((error) => {
                console.log(error);
                throw new AppError(
                    "Error ao enviar o email de recuperação de senha",
                    400
                );
            });
    }

    resetPasswordTemplate(
        userEmail: string,
        userName: string,
        resetToken: string,
        protocol: string,
        host: string
    ) {
        const mailGenerator = new Mailgen({
            theme: "default",
            product: {
                name: "Motor Shop Recuperação de senha.",
                link: `${protocol}://${host}`,
            },
        });

        const email = {
            body: {
                name: userName,
                intro: "You have received this email because a password reset request for your account was received.",
                action: {
                    instructions:
                        "Click the button below to reset your password:",
                    button: {
                        color: "#4529E6",
                        text: "Reset your password",
                        link: `${protocol}://localhost:5173/users/resetPassword/${resetToken}`,
                    },
                },
                outro: "If you did not request a password reset, no further action is required on your part.",
            },
        };

        const emailBody = mailGenerator.generatePlaintext(email);

        const emailTemplate = {
            to: userEmail,
            subject: "Reset password",
            text: emailBody,
        };

        return emailTemplate;
    }
}

export const emailService = new SendEmailService();
