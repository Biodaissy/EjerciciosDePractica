//Escribe una función llamada escalera que reciba un número como
//argumento. La función debe retornar una cadena de texto en forma
//de escalera como en el siguiente ejemplo:

function escalera(num) {
  var result = "";

  for (var i = 1; i <= num; i++) {
    var floor = "";
    for (var j = 1; j <= i; j++) {
      floor += "#";
    }

    floor += "\n";
    result += floor;
  }

  return result;
}
