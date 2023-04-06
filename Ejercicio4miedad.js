//Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad
//actual en la consola con la frase "Tienes X años".
//Por ejemplo, asumiendo que el año actual es 2019 y el usuario ingresa 1999,
//el programa debe imprimir en la consola:
//Tienes 29 años

let anoDeNacimiento = parseInt(prompt("Escribe tu año de nacimiento"));
//let anoActual = parseInt(prompt("Escribe el año actual"));

//console.log(`Tienes ${anoActual - anoDeNacimiento} años.`);

const anioActual = new Date().getFullYear();
const anoDeNacimiento = parseInt(prompt("Escribe tu año de nacimiento"));

console.log(`Tienes ${anioActual - anoDeNacimiento} años.`);
