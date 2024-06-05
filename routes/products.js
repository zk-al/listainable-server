const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router.get("/", async (req, res) => {
  try {
    const data = await knex("products");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch data" });
    console.log(`${error}`);
  }
});

module.exports = router;
