const http = require("http");
const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   console.log("middleware");

//   next(); // Allow request to continue to the next middlewate in line
// });

app.use("/add-products", (req, res, next) => {
  console.log("middleware next");
  res.send("<h1>Add products to cart</h1>");
});

app.use("/", (req, res, next) => {
  console.log("middleware next");
  res.send("<h1>Hello from express</h1>");
});


// const routes = require("./routes");
// const server = http.createServer(routes );

app.listen(3000);
