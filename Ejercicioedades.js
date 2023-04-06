//Escribe una función llamada edadesValidas que
// tome un argumento edades, que es un array de números que
// representan edades. La función debe utilizar un ciclo for para
// recorrer cada elemento del array y verificar si cada edad está dentro
// del rango de 17 a 70 años. Si encuentra una edad que no está dentro del rango,
// la función debe devolver false. De lo contrario, si todas las
// edades están dentro del rango, la función debe devolver true.

function edadesValidas(edades) {
  for (let i = 0; i < edades.length; i++) {
    if (edades[i] < 17 || edades[i] >= 70) {
      return false;
    }
  }
  return true;
}
console.log(edadesValidas([16, 18, 25, 70, 71])); // false
console.log(edadesValidas([17, 25, 50, 68])); // true
