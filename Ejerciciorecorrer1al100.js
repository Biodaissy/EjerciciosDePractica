/*Recorrer del 1 al 100. 
Cuando el número sea multiplo de 3 y 5 en vez de que salga el 
número tiene que salir fizz buzz. Cuando sea multiplo de 3 fizz
cuando sea mulltiplo de 5 buzz. Cuando no sea multiplo de ninguno 
tiene que salir el número normal */

let num = parseInt(prompt("Escribe un número"));

if (num % 3 === 0 && num % 5 === 0) {
  console.log("fizz buzz");
} else if (num % 3 === 0) {
  console.log("fizz");
} else if (num % 5 === 0) {
  console.log("buzz");
} else {
  console.log(num);
}
