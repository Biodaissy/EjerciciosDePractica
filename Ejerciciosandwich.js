// Escribe un código que defina un objeto llamado recipe que represente una receta de sándwich.
// La receta debe incluir el nombre del sándwich y una lista de ingredientes,
// cada uno de los cuales debe especificar su nombre y cantidad necesaria.
// Además, el código debe imprimir en la consola el objeto recipe completo y el nombre
// del primer ingrediente de la lista.
const recipe = {};
recipe.name = "Sandwich";
recipe.ingredients = [];
recipe.ingredients.push(
  { nombre: "Pan", cantidad: 2 },
  { nombre: "Queso", cantidad: 1 },
  { nombre: "Tomate", cantidad: 2 }
);
console.log(recipe);
console.log(recipe.ingredients[0].nombre);
