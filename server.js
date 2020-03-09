require("dotenv").config();
const express = require("express");
const path = require("path");
const routes = require("./routes");
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose")

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
    subject: "I hope I have a future...",
    text: "Llardian"
};

// Send mail
transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
        console.log("Error friend", err);
    } else {
        console.log("Have future!");
    }
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//Connect to DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/messages";
mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true });


// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`API server accessible here: http://localhost:${PORT} !`);
});