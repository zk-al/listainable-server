const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config(); //load env variables
const { PORT, BASE_URL } = process.env;

const productRoutes = require("./routes/products");
const listRoutes = require("./routes/list");
const userRoutes = require("./routes/user");

// TBD if I will need this
// const searchRoutes = require("./routes/search");

app.use(express.json());
app.use(cors());

app.use("/products", productRoutes);
app.use("/list", listRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`running at ${BASE_URL}${PORT}`);
});

/*

I need to get info from the OpenFoodFacts API, filter and add product to the database 

GET OpenFoodFacts API

Get request to get data from the OpenFoodFacts API

    URLs will be different depending on category and filtering infomation
    i.e. getting a 10 products from 1 category
    Will be making 1 request per category to get 10 products from each category

Example response:

    I won't paste the JSON here as it's is a massive amount of information. It can be filtered to an extent through the API but but will be filtered in a separate request to my database


POST /products

    Filter and add new products to database

Parameters:

    product-name
    certifications: labels and certification like organic, rainforest alliance, no gluten, ect.
    ingrdients: an array of strings
    category: string
    ecoscore: string - a letter grade determining how environmentally friendly a product is
    nutriscore: string - a letter grade to determine how nutricious a product is

Example Response:

{
    "product-name": "Nutella",
    "product-image": "image-url",
    "certifications": [
      "No gluten",
      "Vegetarian",
    ]
    "ingredients": [
      "ingredient1",
      "ingredient2",
      "ingredient3"
    ],
    "category": "Condiment"
    "eco-score": "c",
    "nutri-score": "d",
}


*/
