const nodemailer = require('nodemailer');

let number = 0;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mooijdaan@gmail.com',
        pass: 'LD7PN^B)R$brxVrecZ3LMfN)tApi4KuuYqgNaVNWdPeXmNaH%YNGLuCKucdsHv2N'
    }
});

const mailOptions = {
    from: 'mooijdaan@gmail.com',
    to: 'mail@daan-mooij.nl',
    subject: `Sending mails! This is number ${number}`,
    text: '',
};

function intervalFunc() {
    transporter.sendMail(mailOptions, function (err, info) {
        console.log("Jahoor, hij is weg!");
        if (error) {
            console.log(error);
        } else {
            console.log(`Email is sent! It was number ${number}`)
        }
    })
}

setInterval(intervalFunc, 5000);