// Escribe un programa para la consola que le pida al usuario un número e imprima
//los números desde 1 hasta el número.
// Por ejemplo, si el usuario ingresa el número 5, el programa de be imprimir:
// 1
// 2
// 3
// 4
// 5

let num = parseInt(prompt("Escribe un número"));
for (let i = 1; i <= num; i++) {
  console.log(i);
}
