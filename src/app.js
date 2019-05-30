const express = require("express");
const app = express();
const { getData } = require("./controller");

const PORT = 3000;

app
  .get("/", async (req, res) => {
    res.send(await getData());
  })
  .listen(PORT, () => {
    console.log(`App started on http://localhost:${PORT}`);
  });
