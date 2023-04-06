// Escribe una función llamada "multiplyElements" que reciba como argumento un arreglo
// de números y devuelva un nuevo arreglo donde cada elemento del arreglo original se haya
// multiplicado por 5. Luego, llama a la función con el arreglo [2, 4, 5, 6, 8] e
// imprime el resultado por consola.

function multiplyElements(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * 5);
  }
  return result;
}
console.log(multiplyElements([2, 4, 5, 6, 8]));
