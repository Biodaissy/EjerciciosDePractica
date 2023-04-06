function multiplicaporcuatro(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * 4);
  }
  return result;
}
console.log(multiplicaporcuatro([1, 2, 3]));
//Usando .map
numeros = [1, 2, 3];
const numerosMultiplicadosPorCuatro = numeros.map(function (numero) {
  return numero * 4;
});
console.log(numerosMultiplicadosPorCuatro);
