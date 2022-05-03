const express = require("express");
const path = require("path");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  
  console.log("products >>--------------->")
  console.log(adminData.products)
  // console.log(products)
  res.render("shop", { prods: products, docTitle: "Shop" });
  // res.send("God is good");
  //   res.sendFile(path.join(__dirname, '../', "views", "shop.html"));
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
