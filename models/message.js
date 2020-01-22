const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({

    sender: String,
    email: String,
    message: String

});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;