/*

GET /product/category

Get products of a certain category to display on home page

Parameters:
    category

Example Response:

{
    "product-name": "Nutella",
    "product-image": "image-url",
    "category": "Condiment"
    "eco-score": "c",
    "nutri-score": "d",
}

*/

const express = require("express");
const router = express.Router();
// const knex = require("knex")(require("../knexfile"));

router.get("/product/category", (req, res) => {
  res.status(200).send("Home Page: GET products by category");
});

module.exports = router;
