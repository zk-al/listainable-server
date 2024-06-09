/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const products = [
  {
    id: 1,
    product_image: "assets/images/plant-based/almond-milk.webp",
    product_name: "Almond Milk",
    certifications: JSON.stringify([
      "Non-GMO Project Verified",
      "Certified Gluten-Free",
    ]),
    ingredients: JSON.stringify([
      "Almonds",
      "Water",
      "Calcium Carbonate",
      "Vitamin D2",
      "Sea Salt",
    ]),
    categories: JSON.stringify(["Plant-based Foods", "Plant-based Beverages"]),
    eco_score: "B",
    nutri_score: "A",
  },
  {
    id: 2,
    product_image: "assets/images/plant-based/tofu.webp",
    product_name: "Tofu",
    certifications: JSON.stringify([
      "USDA Organic",
      "Non-GMO Project Verified",
    ]),
    ingredients: JSON.stringify([
      "Organic Soybeans",
      "Water",
      "Calcium Sulfate",
    ]),
    categories: JSON.stringify(["Plant-based Foods", "Meat Substitutes"]),
    eco_score: "B",
    nutri_score: "A",
  },
  {
    id: 3,
    product_image: "assets/images/plant-based/soy-yogurt.webp",
    product_name: "Soy Yogurt",
    certifications: JSON.stringify([
      "Certified Vegan",
      "Non-GMO Project Verified",
    ]),
    ingredients: JSON.stringify(["Soy Milk", "Live Cultures", "Pectin"]),
    categories: JSON.stringify(["Plant-based Foods", "Plant-based Yogurts"]),
    eco_score: "B",
    nutri_score: "A",
  },
  {
    id: 4,
    product_image: "assets/images/plant-based/veggie-burgers.webp",
    product_name: "Veggie Burgers",
    certifications: JSON.stringify(["USDA Organic", "Certified Vegan"]),
    ingredients: JSON.stringify([
      "Organic Vegetables",
      "Quinoa",
      "Chickpeas",
      "Spices",
    ]),
    categories: JSON.stringify(["Plant-based Foods", "Meat Substitutes"]),
    eco_score: "B",
    nutri_score: "A",
  },
  {
    id: 5,
    product_image: "assets/images/plant-based/oat-milk.webp",
    product_name: "Oat Milk",
    certifications: JSON.stringify(["USDA Organic", "Certified Gluten-Free"]),
    ingredients: JSON.stringify([
      "Water",
      "Organic Oats",
      "Calcium Carbonate",
      "Sea Salt",
    ]),
    categories: JSON.stringify(["Plant-based Foods", "Plant-based Beverages"]),
    eco_score: "B",
    nutri_score: "A",
  },
  {
    id: 6,
    product_image: "assets/images/vegetables/carrots.webp",
    product_name: "Organic Carrots",
    certifications: JSON.stringify(["USDA Organic"]),
    ingredients: JSON.stringify(["Organic Carrots"]),
    categories: JSON.stringify(["Vegetables", "Root Vegetables"]),
    eco_score: "A",
    nutri_score: "A",
  },
  {
    id: 7,
    product_image: "assets/images/vegetables/broccoli-florets.webp",
    product_name: "Broccoli Florets",
    certifications: JSON.stringify(["USDA Organic"]),
    ingredients: JSON.stringify(["Organic Broccoli"]),
    categories: JSON.stringify(["Vegetables", "Cruciferous Vegetables"]),
    eco_score: "A",
    nutri_score: "A",
  },
  {
    id: 8,
    product_image: "assets/images/vegetables/organic-kale.jpg",
    product_name: "Organic Kale",
    certifications: JSON.stringify(["USDA Organic"]),
    ingredients: JSON.stringify(["Organic Kale"]),
    categories: JSON.stringify(["Vegetables", "Leafy Greens"]),
    eco_score: "A",
    nutri_score: "A",
  },
  {
    id: 9,
    product_image: "assets/images/vegetables/red-bell-pepper.webp",
    product_name: "Red Bell Peppers",
    certifications: JSON.stringify(["USDA Organic"]),
    ingredients: JSON.stringify(["Organic Red Bell Peppers"]),
    categories: JSON.stringify(["Vegetables", "Fresh Vegetables"]),
    eco_score: "A",
    nutri_score: "A",
  },
  {
    id: 10,
    product_image: "assets/images/vegetables/cucumber.webp",
    product_name: "Cucumbers",
    certifications: JSON.stringify(["USDA Organic"]),
    ingredients: JSON.stringify(["Organic Cucumbers"]),
    categories: JSON.stringify(["Vegetables", "Fresh Vegetables"]),
    eco_score: "A",
    nutri_score: "A",
  },
  {
    id: 11,
    product_image: "assets/images/frozen/frozen-pizza.webp",
    product_name: "Frozen Pizza",
    certifications: JSON.stringify(["Certified Gluten-Free"]),
    ingredients: JSON.stringify([
      "Gluten-Free Dough",
      "Tomato Sauce",
      "Cheese",
      "Vegetables",
    ]),
    categories: JSON.stringify(["Frozen Foods", "Frozen Meals"]),
    eco_score: "C",
    nutri_score: "B",
  },
  {
    id: 12,
    product_image: "assets/images/frozen/frozen-peas.webp",
    product_name: "Frozen Peas",
    certifications: JSON.stringify(["USDA Organic"]),
    ingredients: JSON.stringify(["Organic Peas"]),
    categories: JSON.stringify(["Frozen Foods", "Frozen Vegetables"]),
    eco_score: "A",
    nutri_score: "A",
  },
  {
    id: 13,
    product_image: "assets/images/frozen/frozen-fries.webp",
    product_name: "Frozen French Fries",
    certifications: JSON.stringify(["Non-GMO Project Verified"]),
    ingredients: JSON.stringify(["Potatoes", "Canola Oil", "Salt"]),
    categories: JSON.stringify(["Frozen Foods", "Frozen Snacks"]),
    eco_score: "C",
    nutri_score: "C",
  },
  {
    id: 14,
    product_image: "assets/images/frozen/frozen-spring-rolls.webp",
    product_name: "Vegetable Spring Rolls",
    certifications: JSON.stringify(["Certified Vegan"]),
    ingredients: JSON.stringify([
      "Vegetables",
      "Wheat Flour",
      "Soy Sauce",
      "Garlic",
    ]),
    categories: JSON.stringify(["Frozen Foods", "Frozen Snacks"]),
    eco_score: "C",
    nutri_score: "B",
  },
  {
    id: 15,
    product_image: "assets/images/frozen/frozen-burgers.webp",
    product_name: "Frozen Burger Patties",
    certifications: JSON.stringify(["Non-GMO Project Verified"]),
    ingredients: JSON.stringify(["Beef", "Salt", "Pepper"]),
    categories: JSON.stringify(["Frozen Foods", "Frozen Meat"]),
    eco_score: "C",
    nutri_score: "C",
  },
  {
    id: 16,
    product_image: "assets/images/snacks/potato-chips.webp",
    product_name: "Potato Chips",
    certifications: JSON.stringify([
      "Non-GMO Project Verified",
      "Certified Gluten-Free",
    ]),
    ingredients: JSON.stringify(["Potatoes", "Vegetable Oil", "Sea Salt"]),
    categories: JSON.stringify(["Snacks", "Salty Snacks"]),
    eco_score: "D",
    nutri_score: "C",
  },
  {
    id: 17,
    product_image: "assets/images/snacks/pretzels.webp",
    product_name: "Pretzels",
    certifications: JSON.stringify([
      "Non-GMO Project Verified",
      "Certified Gluten-Free",
    ]),
    ingredients: JSON.stringify(["Corn Flour", "Salt", "Canola Oil"]),
    categories: JSON.stringify(["Snacks", "Salty Snacks"]),
    eco_score: "D",
    nutri_score: "C",
  },
  {
    id: 18,
    product_image: "assets/images/snacks/cookies.webp",
    product_name: "Chocolate Chip Cookies",
    certifications: JSON.stringify([
      "Non-GMO Project Verified",
      "Certified Gluten-Free",
    ]),
    ingredients: JSON.stringify([
      "Gluten-Free Flour",
      "Chocolate Chips",
      "Butter",
      "Sugar",
      "Eggs",
    ]),
    categories: JSON.stringify(["Snacks", "Sweet Snacks"]),
    eco_score: "D",
    nutri_score: "D",
  },
  {
    id: 19,
    product_image: "assets/images/snacks/popcorn.webp",
    product_name: "Popcorn",
    certifications: JSON.stringify([
      "Non-GMO Project Verified",
      "Certified Gluten-Free",
    ]),
    ingredients: JSON.stringify(["Popcorn", "Salt", "Vegetable Oil"]),
    categories: JSON.stringify(["Snacks", "Salty Snacks"]),
    eco_score: "D",
    nutri_score: "C",
  },
  {
    id: 20,
    product_image: "assets/images/snacks/granola-bars.webp",
    product_name: "Granola Bars",
    certifications: JSON.stringify([
      "USDA Organic",
      "Non-GMO Project Verified",
    ]),
    ingredients: JSON.stringify(["Oats", "Honey", "Nuts", "Dried Fruits"]),
    categories: JSON.stringify(["Snacks", "Sweet Snacks"]),
    eco_score: "C",
    nutri_score: "B",
  },
];

const users = [
  {
    id: 1,
    username: "Joseph",
    password: "password1",
    email: "joseph@email.com",
  },
  {
    id: 2,
    username: "Brittany",
    password: "password2",
    email: "brittany@email.com",
  },
  {
    id: 3,
    username: "Michael",
    password: "password3",
    email: "michael@email.com",
  },
];

const lists = [
  { id: 1, user_id: 1 },
  { id: 2, user_id: 2 },
  { id: 3, user_id: 3 },
];

const listProducts = [{ id: 1, list_id: 1, product_id: 1, quantity: 1 }];

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert(users);
  await knex("products").del();
  await knex("products").insert(products);
  await knex("lists").del();
  await knex("lists").insert(lists);
  await knex("list_products").del();
  await knex("list_products").insert(listProducts);
};
