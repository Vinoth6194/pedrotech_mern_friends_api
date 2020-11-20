const express = require("express");
const app = express();
const mongoose = require("mongoose");
const FriendModel = require("./models/Friends");
const cors = require("cors");

app.use(cors());
app.use(express.json());
//*database connection
mongoose.connect(
  "mongodb://localhost:27017/tutorialmern?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("Mongo connected for PedroTech Friends");
    } else {
      console.log(
        "Mongo not connected for Pedrotech Friends",
        +JSON.stringify(err, undefined, 2)
      );
    }
  }
);
app.get("/read", (req, res) => {
  FriendModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.post("/addFriend", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const friend = new FriendModel({ name: name, age: age });
  friend.save();
  res.send("Success");
});
app.listen(3001, () => {
  console.log("Server is running at 3001");
});
