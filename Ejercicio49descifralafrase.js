// Escribe una función descifrar que reciba un string y un objeto.
// Utiliza las propiedades del objeto para reemplazar los caracteres de la cadena
// y retorna el resultado:
// descifrar("h0l4", { 0: "o", 4: "a" }); // "hola"
// descifrar("pyrmizo", { y: "e", z: "s" }); // "permiso"
// descifrar("igual", { h: "n" }); // "igual"

function descifrar(str, obj) {
  // Convierte el string en un array de caracteres
  const arr = str.split("");

  // Itera sobre el array de caracteres
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];

    // Si el caracter está definido en el objeto, reemplaza el caracter en el array
    if (obj[char]) {
      arr[i] = obj[char];
    }
  }

  // Convierte el array de caracteres de vuelta en un string y lo retorna
  return arr.join("");
}

// Ejemplos de uso
console.log(descifrar("h0l4", { 0: "o", 4: "a" })); // "hola"
console.log(descifrar("pyrmizo", { y: "e", z: "s" })); // "permiso"
