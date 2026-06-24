function calcularDesconto(preco: number, percentual: number): number {
  let valorFinal: number = preco - preco * (percentual / 100);
  return valorFinal;
}
console.log(calcularDesconto(100, 10));

//1° versão
/*function calcularDesconto(preco: number, percentual: number): number {
  let desconto: number = preco * percentual;
  return preco - desconto;
}
console.log(calcularDesconto(100, 0.1));*/