class Produto {
  nome: string;
  preco: number;
  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
  aplicarDesconto(): number {
    return this.preco * 0.9; // 10% de desconto
  }
  exibirInfo(): void {
    console.log(`${this.nome}: R$ ${this.preco}`);
    console.log(`Com desconto: R$ ${this.aplicarDesconto()}`);
  }
}
let produto = new Produto("Notebook", 3000);
produto.exibirInfo();
// Saída: Notebook: R$ 3000
// Com desconto: R$ 2700