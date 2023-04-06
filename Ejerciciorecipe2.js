// Recipe
// 1. Create an empty object in a variable called `recipe` .
// 2. Add a key called `name` with the value `"Sandwich"`.
// 3. Add a key called `ingredients` with an empty array as value.
// 4. Add an object to the array with two keys: one named `name`
// with value `"Pan"` and another called ``quantity`` with value `2`.
// 5. Add two more ingredients.
// 6. Print the name of the first ingredient in the console.

recipe = {};
recipe.name = "Sandwich";
recipe.ingredients = [];
recipe.ingredients.push(
  { name: "Pan", quantify: 2 },
  { name: "Tomate" },
  { name: "lechuga" }
);

console.log(recipe.ingredients[0].name);
