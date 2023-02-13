const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.NODE_PORT || 3300;
app.use(cors());

app.get("/api", (req, res) => {
  res.json({
    message: "api v1"
  })
});


app.listen(port, () => console.log("server running"));
