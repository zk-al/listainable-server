/*

POST /list

Add new list item

Parameters:

    token: JWT of logged in user
    product-name
    ecoscore
    quantity: input when adding item to list

Example Response

{
    "id": 1
    "product-name": "Nutella",
    "product-image": "image-url",
    "ecoscore": "c",
    "quantity": 4,
}

PUT /list/:id

Edit list item

Parameters:

    token: JWT of logged in user
    id: list item id
    quantity: amount of the item

Example Response:

{
    "id": 1
    "product-name": "Nutella",
    "product-image": "image-url",
    "ecoscore": "c",
    "quantity": 2,
}

DELETE /list/:id

Delete list item

Parameters:

    token: JWT of logged in user
    id: list item id

*/

const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

// Change to POST
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

// Change to PUT
router.put("/:id", async (req, res) => {
  try {
    await knex("user_list")
      .where({ id: req.params.id })
      .update({ quantity: req.body.quantity });
  } catch (error) {
    res.status(500).json({ error: "Failed to update" });
  }
});

// Change to DELETE
router.delete("/:id", async (req, res) => {
  // res.status(200).send(`List Page: DELETE products to list ${req.params.id}`);

  try {
    await knex("user_list").where({ id: req.params.id }).del();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete" });
  }
});

module.exports = router;
