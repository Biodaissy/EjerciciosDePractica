function multiplicaportres(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * 3);
  }
  return result;
}
console.log(multiplicaportres([2, 4, 6]));

//Usando .map
numeros = [3, 6, 9];
const numerosMultiplicadosPorTres = numeros.map(function (numero) {
  return numero * 3;
});
console.log(numerosMultiplicadosPorTres);
