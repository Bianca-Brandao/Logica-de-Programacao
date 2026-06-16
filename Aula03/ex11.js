let n = 123;

let centena = Math.floor(n / 100);       // Pega o primeiro dígito
let dezena = Math.floor((n % 100) / 10); // Remove a centena e pega o segundo
let unidade = n % 10;                     // Pega o resto da divisão por 10

console.log(`As casas decimais do número ${n} são: ${centena} - ${dezena} - ${unidade}`);