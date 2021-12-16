let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'carsellnih@gmail.com',
        pass: 'carsell123'
    }
});

let mailOptions = {
    from: 'carsellnih@gmail.com',
    to: 'bimstama@gmail.com',
    subject: 'Sending Email using Nodejs',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
});