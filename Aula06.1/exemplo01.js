// Exemplo de solução
let numeros = [10, 25, 37, 42, 58];
// Usando for clássico
for (let i = 0; i < numeros.length; i++) {
console.log("Índice " + i + ": " + numeros[i]);
}
// Usando for...of
for (let num of numeros) {
console.log(num);
}
// Usando forEach
numeros.forEach((num, i) => {
console.log(`Posição ${i}: ${num}`);
});