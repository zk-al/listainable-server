/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const products = [
  {
    id: 1,
    user_list_id: 1,
    product_name: "Organic Apples",
    product_image: "image_url1",
    certifications: "USDA Organic",
    ingredients: "Organic apples",
    category: "Plant-Based Foods",
    eco_score: "A",
    nutri_score: "A",
  },
  {
    id: 2,
    user_list_id: 1,
    product_name: "Organic Spinach",
    product_image: "image_url2",
    certifications: "USDA Organic",
    ingredients: "Organic spinach",
    category: "Plant-Based Foods",
    eco_score: "A",
    nutri_score: "A",
  },
  {
    id: 3,
    user_list_id: 1,
    product_name: "Organic Avocado",
    product_image: "image_url3",
    certifications: "USDA Organic",
    ingredients: "Organic avocado",
    category: "Plant-Based Foods",
    eco_score: "A",
    nutri_score: "A",
  },
  {
    id: 4,
    user_list_id: 1,
    product_name: "Almond Milk",
    product_image: "image_url4",
    certifications: "Non-GMO",
    ingredients: "Almonds",
    category: "Plant-Based Foods",
    eco_score: "A",
    nutri_score: "A",
  },
  {
    id: 5,
    user_list_id: 1,
    product_name: "Quinoa",
    product_image: "image_url5",
    certifications: "USDA Organic",
    ingredients: "Quinoa grains",
    category: "Plant-Based Foods",
    eco_score: "A",
    nutri_score: "A",
  },
  {
    id: 6,
    user_list_id: 2,
    product_name: "Frozen Pizza",
    product_image: "image_url6",
    certifications: "Non-GMO",
    ingredients: "Wheat flour, tomato sauce, cheese",
    category: "Frozen Foods",
    eco_score: "B",
    nutri_score: "C",
  },
  {
    id: 7,
    user_list_id: 2,
    product_name: "Frozen Vegetables",
    product_image: "image_url7",
    certifications: "Non-GMO",
    ingredients: "Mixed vegetables",
    category: "Frozen Foods",
    eco_score: "B",
    nutri_score: "A",
  },
  {
    id: 8,
    user_list_id: 2,
    product_name: "Frozen Berries",
    product_image: "image_url8",
    certifications: "Non-GMO",
    ingredients: "Assorted berries",
    category: "Frozen Foods",
    eco_score: "B",
    nutri_score: "A",
  },
  {
    id: 9,
    user_list_id: 2,
    product_name: "Frozen French Fries",
    product_image: "image_url9",
    certifications: "Non-GMO",
    ingredients: "Potatoes",
    category: "Frozen Foods",
    eco_score: "B",
    nutri_score: "B",
  },
  {
    id: 10,
    user_list_id: 2,
    product_name: "Frozen Fish Fillets",
    product_image: "image_url10",
    certifications: "Non-GMO",
    ingredients: "Fish fillets",
    category: "Frozen Foods",
    eco_score: "B",
    nutri_score: "B",
  },
  {
    id: 11,
    user_list_id: 3,
    product_name: "Potato Chips",
    product_image: "image_url11",
    certifications: "Non-GMO",
    ingredients: "Potatoes, salt",
    category: "Snacks",
    eco_score: "C",
    nutri_score: "D",
  },
  {
    id: 12,
    user_list_id: 3,
    product_name: "Tortilla Chips",
    product_image: "image_url12",
    certifications: "Non-GMO",
    ingredients: "Corn flour, salt",
    category: "Snacks",
    eco_score: "C",
    nutri_score: "D",
  },
  {
    id: 13,
    user_list_id: 3,
    product_name: "Popcorn",
    product_image: "image_url13",
    certifications: "Non-GMO",
    ingredients: "Popcorn kernels",
    category: "Snacks",
    eco_score: "C",
    nutri_score: "C",
  },
  {
    id: 14,
    user_list_id: 3,
    product_name: "Granola Bars",
    product_image: "image_url14",
    certifications: "Non-GMO",
    ingredients: "Oats, nuts, honey",
    category: "Snacks",
    eco_score: "C",
    nutri_score: "B",
  },
  {
    id: 15,
    user_list_id: 3,
    product_name: "Trail Mix",
    product_image: "image_url15",
    certifications: "Non-GMO",
    ingredients: "Nuts, dried fruits",
    category: "Snacks",
    eco_score: "C",
    nutri_score: "B",
  },
];

const users = [
  { id: 1, user_list_id: 1, username: "Joseph", password: "password1" },
  { id: 2, user_list_id: 2, username: "Brittany", password: "password2" },
  { id: 3, user_list_id: 3, username: "Michael", password: "password3" },
];

const user_list = [
  { id: 1, product_name: "Organic Apples", eco_score: "A", quantity: 10 },
  { id: 2, product_name: "Frozen Pizza", eco_score: "B", quantity: 5 },
  { id: 3, product_name: "Potato Chips", eco_score: "C", quantity: 8 },
];

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user_list").del();
  await knex("user_list").insert(user_list);
  await knex("products").del();
  await knex("products").insert(products);
  await knex("users").del();
  await knex("users").insert(users);
};
