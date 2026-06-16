let valorA = 2;
let valorB = 4;

console.log(`O valor de A é: ${valorA}, e o valor de B é: ${valorB}`);

let troca = valorA;
valorA = valorB;
valorB = troca;

console.log(
  `O valor de A após a troca é: ${valorA}, e o valor de B é: ${valorB}`,
);