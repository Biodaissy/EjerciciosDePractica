//Crea una variable llamada Arturo de tipo objeto
//literal con las siguientes llaves y valores:

// nombre - "Pedro Perez"
// edad - 30
// activo - true
// hobbies - un arreglo con los siguientes
//elementos: "programar", "squash", "piano".
// Ahora haz lo siguiente:

// Imprime en consola el valor de la llave edad.
// Agrega una propiedad con llave estatura y valor 1.8.
// Elimina la propiedad con llave activo.
// Recorre todas las propiedades e imprímelas en
//consola (una línea por propiedad y separando la
//llave y el valor con dos puntos :).

const Arturo = {};
Arturo.nombre = "Arturo Vega";
Arturo.edad = 20;
Arturo.activo = true;
Arturo.hobbies = [
  "subir a la cama",
  " jugar con la pelota",
  " molestar a Tokio",
];

console.log(Arturo.edad);

Arturo.estatura = 1.8;
delete Arturo.activo;

let llaves = Object.keys(Arturo);
let valores = Object.values(Arturo);
for (let i = 0; i < llaves.length; i++) {
  console.log(llaves[i] + ": " + valores[i]);
}
