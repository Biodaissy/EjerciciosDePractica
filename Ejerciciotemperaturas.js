//Escribe una función llamada temperaturas que reciba un arreglo
//(que representa temperaturas) y retorne
//true si todas las temperaturas están en el rango
//normal (entre 18 y 30 grados) o false de lo contrario.
//temperaturas([30,19,21,18]) //true
//temperaturas([28,45,17,21,70])//false

function temperaturas(temp) {
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] < 18 || temp[i] > 30) {
      return false;
    }
  }
  return true;
}
console.log(temperaturas([17, 15, 3, 80]));
console.log(temperaturas([19, 25, 29]));
