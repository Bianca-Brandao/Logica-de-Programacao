//A
function calcularArea(base: number, altura: number): number {
  return base * altura;
}
console.log(calcularArea(5, 3));

//B
function converterCelsius(temp: number): number {
  return (temp * 9) / 5 + 32;
}
console.log(converterCelsius(50));

//C
function saudacaoPersonalizada(nome: string): string {
  return `Olá, ${nome}! Seja bem-vindo.`;
}
console.log(saudacaoPersonalizada("Bianca"));