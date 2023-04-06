// Escribe una función llamada primeraLetraMayuscula
// que reciba una cadena de texto y retorne
// la misma cadena con la primera letra en mayúscula.

function primeraLetraMayuscula(str) {
  let string = str.charAt(0).toUpperCase();
  let restoCadena = str.slice(1);
  let resultado = string + restoCadena;
  return resultado;
}

console.log(primeraLetraMayuscula("palabra"));
//primeraLetraMayuscula("hola mundo"); // "Hola mundo"
//segundaLetraMayuscula("javascript es divertido"); // "Javascript es divertido"
