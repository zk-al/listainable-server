/*

POST /list

Add new list item

Parameters:

    token: JWT of logged in user
    product-name
    ecoscore
    quantity: input when adding item to list

Example Response

{
    "id": 1
    "product-name": "Nutella",
    "product-image": "image-url",
    "ecoscore": "c",
    "quantity": 4,
}

PUT /list/:id

Edit list item

Parameters:

    token: JWT of logged in user
    id: list item id
    quantity: amount of the item

Example Response:

{
    "id": 1
    "product-name": "Nutella",
    "product-image": "image-url",
    "ecoscore": "c",
    "quantity": 2,
}

DELETE /list/:id

Delete list item

Parameters:

    token: JWT of logged in user
    id: list item id

*/
