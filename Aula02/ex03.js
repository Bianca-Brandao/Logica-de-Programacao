let valorHora = 30.0;
let horasPMes = 20;
let salarioBruto = valorHora * horasPMes;

let inssDesconto = 0.08;

let salarioLiq = salarioBruto - salarioBruto * inssDesconto;

console.log(`Seu salário líquido como professor é R$${salarioLiq}`);