const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require('body-parser')

// app.use((req, res, next) => {
//   console.log("middleware");

//   next(); // Allow request to continue to the next middlewate in line
// });

app.use(bodyParser.urlencoded())

app.use("/add-product", (req, res, next) => {
  console.log("middleware next");
  res.send(
    `<h1>Add products to cart</h1>
    <form action='/product' method='POST'><input type='text' name='title'></input><button type='submit'>Add product</button></form>
    `
  );
});

app.post("/product", (req, res, next) => {  
  console.log(req.body);
  res.redirect('/')
});

app.use("/", (req, res, next) => {
  console.log("middleware next");
  res.send("<h1>Hello from express</h1>");
});

// const routes = require("./routes");
// const server = http.createServer(routes );

app.listen(3000);
