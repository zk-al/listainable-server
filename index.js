const express = require("express");
const app = express();
require("dotenv").config(); //load env variables
const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;

const homeRoutes = require("./routes/home");
const listRoutes = require("./routes/list");
const userRoutes = require("./routes/user");

// TBD if I will need this
// const searchRoutes = require("./routes/search");

app.use(express.json());

app.use("/", homeRoutes);
app.use("/list", listRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`running at ${BASE_URL}${PORT}`);
});
