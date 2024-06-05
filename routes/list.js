const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router.post("/", async (req, res) => {
  try {
    const [newListId] = await knex("user_list").insert(req.body);
    const newListItem = await knex("user_list")
      .where({ id: newListId })
      .first();

    res.status(201).json(newListItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to add item" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    await knex("user_list")
      .where({ id: req.params.id })
      .update({ quantity: req.body.quantity });
  } catch (error) {
    res.status(500).json({ error: "Failed to update" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await knex("user_list").where({ id: req.params.id }).del();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete" });
  }
});

module.exports = router;
