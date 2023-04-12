const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const mongoUrl =
  "mongodb+srv://fsdi456:SANdiego456@wakeuppal.lgugkqe.mongodb.net/wakeuppal?retryWrites=true&w=majority";

const app = express();
app.use(bodyParser.json());

// connect to DB
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.error(e));

mongoose.Promise = global.Promise;

const alarmSchema = new mongoose.Schema({
  userName: String,
  alermname: String,
  time: Number,
  ring: String,
});
const Alarm = mongoose.model("alarms", alarmSchema);

// API ENDPOINTS

app.get("/alarms", (req, res) => {
  Alarm.find()
    .then((result) => res.send(result))
    .catch((err) => res.status(500).send({ message: err.message }));
});

app.post("/alarms", async (req, res) => {
  const alarm = new Alarm(req.body);
  alarm
    .save()
    .then(() => res.send(alarm))
    .catch((err) => res.status(500).send({ message: err.message }));
});

// START server

/**
 * run: node app.js
 * REMEMBER TO STOP AND START THE SERVER WHEN THE CODE CHANGES
 *
 */
app.listen(5000, () => {
  console.log("Server Started");
});
