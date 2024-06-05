const knex = require("knex")(require("../knexfile"));

const getList = async (req, res) => {
  try {
    const userList = await knex("user_list");
    res.status(200).json(userList);
  } catch (error) {
    res.status(500).json({ error: "Failet to fetch user list" });
  }
};

const addItem = async (req, res) => {
  try {
    const [newListId] = await knex("user_list").insert(req.body);
    const newListItem = await knex("user_list")
      .where({ id: newListId })
      .first();

    res.status(201).json(newListItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to add item" });
  }
};

const editItem = async (req, res) => {
  try {
    await knex("user_list")
      .where({ id: req.params.id })
      .update({ quantity: req.body.quantity });
    res.status(200).json({ message: "Item successfully updated" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update" });
  }
};

const deleteItem = async (req, res) => {
  try {
    await knex("user_list").where({ id: req.params.id }).del();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete" });
  }
};

module.exports = { getList, addItem, editItem, deleteItem };
