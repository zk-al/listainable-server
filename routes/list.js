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
// const knex = require("knex")(require("../knexfile"));

// Change to POST
router.get("/", (req, res) => {
  res.status(200).send("List Page: ADD products to list");
});

// Change to PUT
router.get("/:id", (req, res) => {
  res.status(200).send(`List Page: EDIT products on list ${req.params.id}`);
});

// Change to DELETE
router.get("/:id", (req, res) => {
  res.status(200).send(`List Page: DELETE products to list ${req.params.id}`);
});

module.exports = router;
