import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import WelcomeTemplate from '@/emails/WelcomeTemplate';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
        user: 'himanshumittal035@gmail.com',
        pass: 'ypmapzdwdberqmnr',
    },
});

const emailHtml = render(<WelcomeTemplate name="Himanshu" />);

const options = {
    from: 'himanshumittal035@gmail.com',
    to: 'himanshu1571.be20@chitkara.edu.in',
    subject: 'hello world',
    html: emailHtml,
};

await transporter.sendMail(options);
