//Agrega un método llamado promedio a la función constructora
//Array que retorne el promedio de los elementos en el arreglo:

// [1, 2, 3, 4].promedio(); // 2.5
// [7, 8, 9].promedio(); // 8
// [300, 100].promedio(); // 200

function promedio(arr) {
  if (arr.length === 0) {
    return 0;
  }
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// Ejemplos de uso
console.log(promedio([1, 2, 3, 4])); // 2.5
console.log(promedio([7, 8, 9])); // 8
console.log(promedio([300, 100])); // 200
