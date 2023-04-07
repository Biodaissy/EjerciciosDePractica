/*Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida 
al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola 
"Felicitaciones, ese era!", de lo contrario debe imprimir 
"Lo siento, intenta nuevamente!"*/

let num = parseInt(prompt("Adivina el número"));
randomnum = Math.floor(Math.random() * 10);

if (num === randomnum) {
  console.log("Felicitaciones, ese era!");
} else {
  console.log(`Lo siento, el número era ${randomnum}. Intenta nuevamente!`);
}
