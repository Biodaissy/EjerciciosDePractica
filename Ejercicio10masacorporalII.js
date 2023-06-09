// El índice de masa corporal (IMC), o BMI por sus siglas en inglés,
// es un valor que determina la cantidad de grasa de una persona.
// El BMI se calcula con la siguiente formula:
// peso / altura^2
// Escribe un programa que le pida al usuario su peso y altura. El programa deberá calcular el BMI e imprimir:

// "Bajo de peso" si el BMI < 18.5
// "Normal" si está entre 18.5 y 24.9
// "Sobrepeso" si está entre 25 y 29.9
// "Obeso" si es igual o mayor a 30

let weight = prompt("Ingresa tu peso");
let height = prompt("Ingresa tu altura");

let bmi = parseFloat(weight) / parseFloat(height) ** 2;

if (bmi < 18.5) {
  console.log("Bajo de peso");
} else if (bmi >= 18.5 && bmi < 24.9) {
  console.log("Normal");
} else if (bmi >= 24.9 && bmi < 29.9) {
  console.log("Sobrepeso");
} else {
  console.log("Obeso");
}
