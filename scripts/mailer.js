
const nodemailer = require("nodemailer");


sendEmail = (firstName, lastName, email, message) => {

// Nodemailer middleware
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

// Configure mailer options
let mailOptions = {
    from: "jeffpgreco@gmail.com",
    to: "jeffpgreco@gmail.com",
    subject: `A message from ${firstName} ${lastName}`,
    text: `
    from: ${email}
    
    message: ${message}`
};

// Send mail
transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
        console.log("Error friend", err);
    } else {
        console.log("Have future!");
    }
});

}

module.exports = sendEmail;