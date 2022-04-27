const http = require("http");
const express = require('express')
const app = express();
app.use((req, res, next) => {
    console.log("middleware");
    next(); // Allow request to continue to the next middlewate in line
})
app.use((req, res, next) => {
    console.log("middleware next");
})
const routes = require("./routes");
const server = http.createServer(app);

server.listen(3000);
