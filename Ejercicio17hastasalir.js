// Escribe un programa que:
// Le pida al usuario un string (una cadena de texto).
// Si el string es "salir" (todo en minúsculas) el programa debe imprimir en la consola
//"Hasta pronto!" y terminar.
// De lo contrario imprime en la consola lo que el usuario ingresó y repite el proceso
//desde el paso 1.

var string = prompt("Ingresa un texto");

while (string !== "salir") {
  console.log(string);
  string = prompt("Ingresa un texto");
}

console.log("Hasta pronto!");

//Aquí es donde entra la segunda asignación a la variable string.
// La condición del bucle while es string !== "salir", lo que significa que el
// bucle seguirá ejecutándose mientras el valor de la variable string no sea igual a la cadena
// "salir". Entonces, si el usuario ingresa cualquier cadena que no sea "salir", la condición
// seguirá siendo verdadera y el bucle se repetirá. En cada repetición del bucle, el valor de
// string se sobrescribirá con la nueva entrada del usuario.

// Sin embargo, si el usuario ingresa la cadena "salir", la condición del bucle se vuelve falsa,
// lo que significa que el bucle se detiene y el programa continúa ejecutándose con la siguiente
// línea de código que es console.log("Hasta pronto!");. Pero para que la condición del bucle sea
// falsa, el valor de la variable string debe ser igual a la cadena "salir". Y esto solo sucederá
// si se asigna esta cadena a la variable string. Por lo tanto, la segunda asignación a la variable
// string es necesaria para que el bucle pueda detectar cuando el usuario ha ingresado la cadena
// "salir" y así detenerse.
