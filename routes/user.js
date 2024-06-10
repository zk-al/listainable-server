/*

POST /users/register

Add a user account

Parameters:

    email: User's email
    password: User's provided password

Response:

{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}

POST /users/login

Login a user

Parameters:

    email: User's email
    password: User's provided password

Response:

{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}

*/

const express = require("express");
const router = express.Router();
// const knex = require("knex")(require("../knexfile"));

// Change to POST
router.get("/register", (req, res) => {
  res.status(200).send("Users: ADD user to DB");
});

// Change to POST
router.get("/login", (req, res) => {
  res.status(200).send("Users: LOGIN a user");
});

module.exports = router;
