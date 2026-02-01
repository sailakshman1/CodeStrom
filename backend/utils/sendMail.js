require('dotenv').config()
const nodemailer = require('nodemailer');

const sendRegistrationEmail = async (teamData) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const toEmails = teamData.members.map(m => m.email).join(', ');

    const mailOptions = {
        from: `"Event Registration" <${process.env.EMAIL_USER}>`,
        to: toEmails,
        subject: `🎉 Team "${teamData.teamName}" Registered Successfully`,
        html: `
            <h2>Hello Team ${teamData.teamName}!</h2>
            <p>Your team has been registered successfully for the event.</p>
            <p>Thank you for registering! Stay tuned for updates.</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent");
    } catch (err) {
        console.error(err);
    }

};

module.exports = sendRegistrationEmail;
