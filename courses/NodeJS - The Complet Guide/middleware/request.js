const express = require("express");
const app = express();

const unknownEndpoint = app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

module.exports = {
  unknownEndpoint,
};
