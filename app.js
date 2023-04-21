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
const Message = require("./MessagesSchema");

//const User = mongoose.model("Userinfo");

app.get("/", async (req, res) => {
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


//let foundUser = User.findone (email matches loginUser.email)
//compare loginUser.email  to foundUser.email
//if the loginUser.password == foundUser.password then console.log("Your GUcci")

//CHECK OUT CODEWARS.COM 

app.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user)
    if (!user) {
      return res.status(401).send('Invalid username or password');
    }
    if (user.password !== req.body.password) {
      return res.status(401).send('Invalid username or password');
    }
    // User is authenticated, do something
    res.send(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }

});


app.post('/contact', async (req, res) => {
  const { fname, lname, country, subject } = req.body;
  try {
    const oldMessage = await Message.findOne({ subject: req.body.subject});
    //console.log(subject);
    //console.log(oldMessage);
    if (oldMessage) {
      res.send({ error: "Duplicate message found" });
    } else {
      await Message.create({
        fname,
        lname,
        country,
        subject,
      });
      // User is authenticated, do something
      res.send({ status: "ok" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(5000, () => {
  console.log("Server Started")
})