const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.js");
});

app.get("/cal", (req, res) => {
  res.send([
    {
      name: "john",
      age: 20,
    },
  ]);
});
