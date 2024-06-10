const express = require("express");
const router = express.Router();
const listController = require("../controllers/list-controller");

router.route("/").get(listController.getList);

router
  .route("/:id")
  .get(listController.getListTable)
  .post(listController.addItem)
  .put(listController.editItem)
  .delete(listController.deleteItem);

module.exports = router;
