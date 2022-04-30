const express = require("express");
const config = require("../config/app");
const PORT = config.PORT;

const app = express();

app.use("/elevate", (req, res) => {
  res.send("<p>Moving to higher grounds</p>");
});

app.use("/", (req, res) => {
  res.send({ message: "God is good" });
});

app.listen(PORT, () => {
  console.log(`server running at port, ${PORT}`);
});
