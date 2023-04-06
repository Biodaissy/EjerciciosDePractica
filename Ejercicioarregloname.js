const personas = [
  {
    name: "Day",
    lastName: "Monroy",
    age: 30,
  },
  {
    name: "Gis",
    lastName: "Camacho",
    age: 28,
  },
  {
    name: "Jessi",
    lastName: "Marin",
    age: 29,
  },
];

function getNames(array) {
  let names = []; // Creamos un array vacío para almacenar los nombres
  for (let i = 0; i < array.length; i++) {
    names.push(array[i].name); // Añadimos el nombre de cada objeto al array "names"
  }
  return names; // Retornamos el array "names" con los nombres
}
const nombres = getNames(personas);

console.log(nombres);
