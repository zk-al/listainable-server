const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config(); //load env variables
const { PORT, BASE_URL } = process.env;

const productRoutes = require("./routes/products");
const listRoutes = require("./routes/list");
const userRoutes = require("./routes/user");

app.use(express.json());
app.use(cors());

app.use("/products", productRoutes);
app.use("/list", listRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`running at ${BASE_URL}${PORT}`);
});
