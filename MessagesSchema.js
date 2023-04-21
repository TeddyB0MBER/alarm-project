const mongoose = require("mongoose");


const MessagesSchema = new mongoose.Schema(
    {
        fname: { type: String },
        lname: { type: String },
        country: { type: String },
        subject: { type: String },
    },
    {
        collection: "UserMessages",
    }
);

const UserMessages = mongoose.model("UserMessages", MessagesSchema);

module.exports = UserMessages;