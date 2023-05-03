/*Escribir una función llamada contrasenaValida que reciba un string y 
retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". 
De lo contrario debe retornar false.*/

// escribe tu respuesta acá

// código de prueba
/*console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValuda("")) // false*/

function contrasenaValida(cadena) {
  if (cadena === "2Fj(jjbFsuj" || cadena === "eoZiugBf&g9") {
    return true;
  }
  return false;
}
console.log(contrasenaValida("2Fj(jjbFsuj")); // true
console.log(contrasenaValida("eoZiugBf&g9")); // true
console.log(contrasenaValida("hola")); // false
console.log(contrasenaValida("")); // false
