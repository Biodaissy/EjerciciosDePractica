/*- factorial-for.js -> Este archivo debe calcular el factorial de 10 
utilizando un solo bucle for*/

/*function factorial(numero) {*/
let factorial = 1;
let numero = 10;

for (let i = 1; i <= numero; i++) {
  factorial *= i;
}

console.log(factorial);
