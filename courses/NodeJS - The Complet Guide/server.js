const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

app.use(bodyParser.urlencoded());

app.use(shopRouter);
app.use(adminRouter);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000);
