const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("yeah"));

module.exports = port =>
  app.listen(port, () =>
    console.log(`server ${port - 3000} listening on port ${port}`)
  );