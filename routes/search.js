/*
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

SEARCH QUERY
    https://chatgpt.com/share/4964c8f4-0c4d-4119-9417-ef0cee390ae6

*/
