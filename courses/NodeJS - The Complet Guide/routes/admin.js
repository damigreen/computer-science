const express = require("express");
const path = require("path");

const rootDir = require('../util/path')

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  res.redirect("/admin");
});

router.get("/", (req, res, next) => {
  res.send("<h1>Hello from express</h1>");
});

// const routes = require("./routes");
// const server = http.createServer(routes );

module.exports = router;
