const express = require("express");
const app = express();
const mongoose = require("mongoose");
const FriendModel = require("./models/Friends");

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
app.get("/friends", (req, res) => {
  res.send("Works");
});
app.get("/insert", (req, res) => {
  const friend = new FriendModel({ name: "Vinoth", age: "26" });
  friend.save();
  res.send("Inserted with  get  method");
});
app.listen(3001, () => {
  console.log("Server is running at 3001");
});
