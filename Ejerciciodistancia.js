// Escribe una función llamada `distancia` que reciba dos strings del mismo tamaño y retorne el número de posiciones que tengan caracteres diferentes.

//     distancia("hola", "pola") -> 1
//     distancia("sol", "tal") -> 2*/

function distancia(str1, str2) {
  let count = 0; // Inicializa un contador en 0
  let posiciones = []; // Inicializa un arreglo vacío para las posiciones

  // Itera a través de los caracteres de ambos strings
  for (let i = 0; i < str1.length; i++) {
    // Compara el carácter actual de cada string
    if (str1.charAt(i) !== str2.charAt(i)) {
      // Si son diferentes, incrementa el contador en 1
      count++;
      // Agrega la posición actual al arreglo de posiciones
      posiciones.push(i);
    }
  }

  // Retorna un objeto con el número de posiciones diferentes y el arreglo de posiciones
  return {
    cantidad: count,
    posiciones: posiciones,
  };
}

// Ejemplos de uso:
console.log(distancia("hola", "pola")); // { cantidad: 1, posiciones: [1] }
console.log(distancia("sol", "tal")); // { cantidad: 2, posiciones: [0, 2] }
