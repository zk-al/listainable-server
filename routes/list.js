const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));
const listController = require("../controllers/list-controller");

router.route("/").post(listController.addItem);

router
  .route("/:id")
  .put(listController.editItem)
  .delete(listController.deleteItem);

module.exports = router;
