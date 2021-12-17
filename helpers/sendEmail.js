let nodemailer = require('nodemailer');

function sendEmail(value) {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'carsellnih@gmail.com',
            pass: 'carsell123'
        }
    });

    let mailOptions = {
        from: 'carsellnih@gmail.com',
        to: `bimansyahpratama@gmail.com`,
        subject: 'Thank You!',
        text: `Thank you ${value.username} for buying our car with code ${value.code}. We will we will immediately process your order!`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) throw err;
        console.log('Email sent: ' + info.response);
    });
}

module.exports = sendEmail;