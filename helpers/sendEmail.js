let nodemailer = require('nodemailer');

function sendEmail(email, username, code) {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'carsellnih@gmail.com',
            pass: 'carsell123'
        }
    });

    let mailOptions = {
        from: 'carsellnih@gmail.com',
        to: `${email}`,
        subject: 'Thank You!',
        text: `Thank you ${username} for buying our car with code ${code}. We will we will immediately process your order!`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) throw err;
        console.log('Email sent: ' + info.response);
    });
}

module.exports = sendEmail;