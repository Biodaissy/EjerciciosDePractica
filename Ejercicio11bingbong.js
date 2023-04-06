//Escribe un programa que le pida al usuario ingresar un número.

// Si el número es múltiplo de 3 debe imprimir en la consola "bing".
// Si el número es múltiplo de 5 debe imprimir en la consola "bong".
// Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola "bingbong".
// Si el no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

let num = parseInt(prompt("Escribe un número"));

if (num % 3 === 0 && num % 5 === 0) {
  console.log("BingBong");
} else if (num % 3 === 0) {
  console.log("Bing");
} else if (num % 5 === 0) {
  console.log("Bong");
} else {
  console.log(num);
}
