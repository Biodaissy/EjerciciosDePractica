// Completa el siguiente programa para imprimir los números que
//sean mayores a 10.

// const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]
// // escribe tu código acá
// El resultado debería ser el siguiente:
// 23
// 40
// 12
// 67
// 24
// 39
const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39];

for (let i = 0; i < nums.length; i++) {
  let a = nums[i];
  if (nums[i] > 10) {
    console.log(a);
  }
}
