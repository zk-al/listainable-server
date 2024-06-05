const express = require("express");
const router = express.Router();
const listController = require("../controllers/list-controller");

router.route("/").get(listController.getList).post(listController.addItem);

router
  .route("/:id")
  .put(listController.editItem)
  .delete(listController.deleteItem);

module.exports = router;
