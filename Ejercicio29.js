/*El método splice modifica el arreglo original y devuelve un subarreglo 
que contiene los elementos eliminados. En este caso, el método splice elimina los 
elementos del arreglo actualizado que están después del segundo elemento, es decir, 
"0" y "Juan", y devuelve un subarreglo que contiene los elementos "Juan" y "Maria". 
Por lo tanto, el resultado final de la expresión console.log(reemplazar(["Pedro", "Maria", 0,
 "Juan"], 0, "Juan").splice(0, 2)); es ["Juan", "Maria"].*/

reemplazar([1, 2, 3, 4], 1, 3); // [1, 3, 3, 4]
reemplazar(["Pedro", "Maria", 0, "Juan"]); // ["Juan", "Maria"] */

function reemplazar(arr, pos, value) {
  arr[pos] = value;
  return arr;
}

console.log(reemplazar([1, 2, 3, 4], 1, 6)); // [1, 3, 3, 4]);
console.log(reemplazar(["Pedro", "Maria", 0, "Juan"], 0, "Juan").splice(0, 2)); // ["Juan", "Maria"])
//----------------------------------------
function reemplazar(arr, pos, val) {
  arr[pos] = val;
  return arr;
}
let arr2 = ["Pedro", "Maria", 0, "Juan"];
let nuevoArr2 = reemplazar(arr2, 0, "Juan");
nuevoArr2.splice(nuevoArr2.length - 2, 2);
console.log(nuevoArr2);
