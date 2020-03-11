require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const routes = require("./routes");
const sendEmail = require("./scripts/mailer.js")

const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser())


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//Connect to DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/messages";
mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true });


// Define API routes here
// app.use(routes);

app.post("/api/sendMail", (req, res) => {
    console.log(req.body)
    
    sendEmail(req.body.firstName, req.body.lastName, req.body.email, req.body.message)
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`API server accessible here: http://localhost:${PORT} !`);
});