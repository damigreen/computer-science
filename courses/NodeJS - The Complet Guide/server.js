const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const middleware = require("./middleware/request");

app.set('view engine', 'pug');
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter.routes);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).render('404');
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.use(middleware.unknownEndpoint);

app.listen(3000);
