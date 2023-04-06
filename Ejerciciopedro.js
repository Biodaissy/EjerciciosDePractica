//Crea una variable llamada pedro de tipo objeto literal con las siguientes llaves y valores:

// nombre - "Pedro Perez"
// edad - 30
// activo - true
// hobbies - un arreglo con los siguientes elementos: "programar", "squash", "piano".
// Ahora haz lo siguiente:

// Imprime en consola el valor de la llave edad.
// Agrega una propiedad con llave estatura y valor 1.8.
// Elimina la propiedad con llave activo.
// Recorre todas las propiedades e imprímelas en consola (una línea por propiedad y separando la llave y el valor con dos puntos :).

const Pedro = {};
Pedro.nombre = "Pedro Pérez";
Pedro.edad = 30;
Pedro.activo = true;
Pedro.hobbies = ["programar", "squash", "piano"];

console.log(Pedro.edad);

Pedro.estatura = 1.8;
delete Pedro.activo;

let llaves = Object.keys(Pedro);
let value = Object.values(Pedro);
for (let i = 0; i < llaves.length; i++) {
  //console.log(`${llaves[i]}:${value[i]}`);
  console.log(llaves[i] + ":" + value[i]);
}
