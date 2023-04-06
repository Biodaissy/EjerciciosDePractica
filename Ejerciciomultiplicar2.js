function multiplyElements(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * 2);
  }
  return result;
}
console.log(multiplyElements([2, 4, 5, 6, 8])); // Output: [4, 8, 10, 12, 16]

//Multiplica por dos usando .map
const numeros = [1, 2, 3, 4, 5];

const numerosMultiplicadosPorDos = numeros.map(function (numero) {
  return numero * 2;
});

console.log(numerosMultiplicadosPorDos); // [2, 4, 6, 8, 10]
