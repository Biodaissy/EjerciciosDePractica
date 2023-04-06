//Escribe un programa que le pida al usuario una frase y un número.
//El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario.
//Por ejemplo, si el usuario ingresó la frase "Hola Mundo" y el número 5,
//el programa debe imprimir "Hola Mundo" 5 veces:
// // Hola Mundo
// // Hola Mundo
// // Hola Mundo
// // Hola Mundo
// // Hola Mundo

let frase = prompt("Escribe una frase");
let num = parseInt(prompt("Escribe un número"));

for (let i = 1; i <= num; i++) {
  console.log(`${i} ${frase}`);
}
