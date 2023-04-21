const mongoose = require("mongoose");


const UserDetailsSchema = new mongoose.Schema(
    {
        fname: { type: String },
        lname: { type: String },
        email: { type: String, unique: true },
        password: { type: String },
    },
    {
        collection: "UserInfo",
    }
);

const UserInfo = mongoose.model("UserInfo", UserDetailsSchema);

module.exports = UserInfo;