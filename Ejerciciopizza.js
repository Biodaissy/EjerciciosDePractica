//Pizza

const pizza = {};
pizza.ingredientes = [];
pizza.acompañantes = [];
pizza.combo = [];

pizza.ingredientes.push(
  { nombre: "queso", cantidad: 2 },
  { nombre: "piña", cantidad: 4 },
  { nombre: "jamon", cantidad: 2 }
);

pizza.acompañantes.push(
  { nombre: "gaseosa", cantidad: 1 },
  { nombre: "limonada", cantidad: 1 },
  { nombre: "salsas", cantidad: 3 },
  { nombre: "vegetales" }
);

pizza.combo.push(
  { combo1: "papitas y gaseosa" },
  { combo2: "limonada y papas" },
  { combo3: "vegetales y limonada" }
);

//console.log(pizza);
//console.log(pizza.ingredientes[1].nombre);
//console.log(pizza.combo[2]);

const combo2 = pizza.combo.find((combo) =>
  Object.keys(combo).includes("combo2")
);
const combo2Values = Object.values(combo2)[0];
console.log(combo2Values);
