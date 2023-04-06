//Escribe una función llamada `distancia` que reciba dos strings del
//mismo tamaño y retorne el número de posiciones que tengan caracteres
//diferentes.

function distancia(a, b) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      count++;
    }
  }
  console.log(count);
}

distancia("hola", "pola");
distancia("sol", "tal");
