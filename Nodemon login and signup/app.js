const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());

const mongoUrl =
  "mongodb+srv://Kenny:uncharted3@login.cwrmlkk.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((e) => console.log(e));

const User = require("./userDetailsSchema");

//const User = mongoose.model("Userinfo");

app.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;
  try {
    const oldUser = User.findOne({ email });
    if (oldUser) {
      res.send({ error: "User Exists" });
    }
    await User.create({
      fname,
      lname,
      email,
      password,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.listen(5001, () => {
  console.log("Server Started");
});
