const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());

const mongoUrl =
  "mongodb+srv://fsdi456:SANdiego456@wakeuppal.lgugkqe.mongodb.net/wakeuppal?retryWrites=true&w=majority";
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

app.get("/", async(req, res) => {
  res.send("Welcome page here in the future");
});

app.get("/users", async (req, res) => {
  const user = await User.find();
  res.send(user);
});

app.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    console.log(email);
    console.log(oldUser);
    if (oldUser) {
      res.send({ error: "User Exists" });
    } else {
      await User.create({
        fname,
        lname,
        email,
        password,
      });
      res.send({ status: "ok" });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
});

app.listen(5000, () => {
  console.log("Server Started");
});
