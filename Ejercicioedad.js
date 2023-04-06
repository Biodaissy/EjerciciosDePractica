//Escriba una funcion que valide la edad de la persona , si se
//encuentra entre 18 y 70 años , que imprima en consola "Adulto",
//si es menor de 18
//imprima "Joven" y si es mayor de 70 años que imprima "Viejo"
//[28, 45, 13, 5, 87];

function edades(edad) {
  for (let i = 0; i < edad.length; i++) {
    if (edad[i] >= 18 && edad[i] <= 70) {
      console.log("Adulto");
    } else if (edad[i] > 70) {
      console.log("Viejo");
    } else {
      console.log("Joven");
    }
  }
}

edades([28, 45, 13, 5, 87]);
