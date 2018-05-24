const express = require("express");

const app = express();
const PORT = 8000;




app.route("/").get((req, res) => {
  console.log("Smoothie Duplicator Home Page");
  res.send("Smoothie Duplicator Home Page");
});

app.route("/api/smoothies").get((req, res) => {
  console.log("Smoothie Duplicator All Smoothies Page");
  res.send("All Smoothies");
});

app.route("/api/smoothies/:id").get((req, res) => {
  console.log("Smoothie Duplicator Single Smoothie Page");
  res.send("Single Smoothie");
});



app.listen(8000, () => {
  console.log(`Server started on port: ${PORT}`);
});