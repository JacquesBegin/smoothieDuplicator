const express = require("express");

const app = express();
const PORT = 8000;


app.listen(8000, () => {
  console.log(`Server started on port: ${PORT}`);
});