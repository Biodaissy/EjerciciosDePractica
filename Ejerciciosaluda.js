// Escribe una función llamada hola que reciba un argumento (una cadena de texto)
// y retorne "Hola " seguido del argumento y un signo de exclamación.
function hola(name) {
  return "Hola " + name + "!";
}
//hola("Pedro");
console.log(hola("Pedro"));

function hola(nombre) {
  if (nombre === "") {
    return "Hola !";
  } else {
    return "Hola " + nombre + "!";
  }
}
