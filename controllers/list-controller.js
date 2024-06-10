const knex = require("knex")(require("../knexfile"));

const getList = async (req, res) => {
  try {
    const listProducts = await knex("list_products")
      .select(
        "list_products.id",
        "list_products.quantity",
        "products.product_name",
        "products.product_image",
        "products.eco_score"
      )
      .join("products", "list_products.product_id", "=", "products.id");
    res.status(200).json(listProducts);
  } catch (error) {
    res.status(500).json({ error: "Failet to fetch user list" });
  }
};

const getListTable = async (req, res) => {
  try {
    const tableData = await knex("list_products")
      .where({ list_id: req.params.id })
      .select("*");
    res.status(200).json(tableData);
  } catch (error) {
    res.status(500).json({ error: "Failed to add item" });
  }
};

const addItem = async (req, res) => {
  try {
    const newData = {
      list_id: req.params.id,
      product_id: req.body.productId,
      quantity: req.body.quantity,
    };

    console.log(req.body.quatity);

    await knex("list_products").insert(newData);
    const newListItem = await knex("list_products").where(newData).first();

    res.status(201).json(newListItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to add item" });
  }
};

const editItem = async (req, res) => {
  try {
    await knex("list_products")
      .where({ id: req.params.id })
      .update({ quantity: req.body.quantity });
    res.status(200).json({ message: "Item successfully updated" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update" });
  }
};

const deleteItem = async (req, res) => {
  try {
    await knex("list_products").where({ id: req.params.id }).del();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete" });
  }
};

module.exports = { getList, getListTable, addItem, editItem, deleteItem };
