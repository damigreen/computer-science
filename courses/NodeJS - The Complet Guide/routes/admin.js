const express = require("express");

const router = express.Router();

router.use("/add-product", (req, res, next) => {
  console.log("middleware next");
  res.send(
    `<h1>Add products to cart</h1>
      <form action='/product' method='POST'><input type='text' name='title'></input><button type='submit'>Add product</button></form>
      `
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

router.get("/", (req, res, next) => {
  console.log("middleware next");
  res.send("<h1>Hello from express</h1>");
});

// const routes = require("./routes");
// const server = http.createServer(routes );

module.exports = router;
