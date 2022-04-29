const express = require("express");
const PORT = 8080;

const app = express();

app.use("/", (req, res) => {
  res.send({ message: "God is good" });
});

app.use("/elevate", (req, res) => {
    res.send("<p>Moving to higner grounds</p>")
})

app.listen(PORT, () => {
    console.log(`server running at port, ${PORT}`);
})
