const express = require("express");

const router = express.Router();

router.get("/shop", (req, res, next) => {
  res.send("<h1>Here is your shopping list</h1>");
});

module.exports = router;
