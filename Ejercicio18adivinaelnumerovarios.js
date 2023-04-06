// Escribe un programa que piense un número de forma aleatoria y le pida al usuario que lo
// trate de adivinar (como en uno de los ejercicios anteriores). La diferencia es que esta vez
// el usuario puede intentar indefinidamente hasta que encuentre el número.

let num = parseInt(prompt("Adivina un número"));
let randomNum = Math.floor(Math.random() * 10);
while (true) {
  if (randomNum === num) {
    break;
  }
  num = parseInt(prompt("Adivina otra vez"));
}
console.log(`Lo adivinaste, el número era ${randomNum}`);
