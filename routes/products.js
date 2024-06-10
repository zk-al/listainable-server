const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router.get("/", async (req, res) => {
  try {
    const allProducts = await knex("products");
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch data" });
    console.log(`${error}`);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const singleProduct = await knex("products")
      .where({ id: req.params.id })
      .first();
    res.status(200).json(singleProduct);
  } catch (error) {
    res.status(500).json({ message: "error getting product" });
  }
});

module.exports = router;
