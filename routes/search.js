const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));
const Fuse = require("fuse.js");

router.get("/", async (req, res) => {
  const { query } = req.query;

  try {
    const products = await knex("products").select("*");

    const fuse = new Fuse(products, {
      keys: ["product_name"],
      includeScore: true,
      shouldSort: true,
      threshold: 0.2,
    });

    const searchResults = fuse.search(query);

    const resultData = searchResults.map(({ item }) => item);

    res.json(resultData);
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ error: "Internal service error" });
  }
});

module.exports = router;
