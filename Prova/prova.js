class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
}

let produtos = [
  new Produto("Mouse", 29.99, 20),
  new Produto("Teclado", 60.0, 5),
  new Produto("Caixa de som", 35.5, 15),
  new Produto("Microfone", 75.9, 10),
  new Produto("Fone", 50.0, 4),
  new Produto("Cabo USB-C", 15.9, 35),
  new Produto("Mousepad", 15.0, 20),
  new Produto("Adaptador Bluetooth", 10.99, 2),
];

function calcularValorEstoque(produto) {
  let total = 0
  for (let i = 0; i < produto.length; i++) {
    total += produto.preco * produto.quantidade
  }
  return total
}

console.log("\n==== Situação dos Produtos ====");

let reporEstoque = 0;
let maisValioso = 0;


for (let i = 0; i < produtos.length; i++) {
  console.log(`${produtos[i].nome} - R$${produtos[i].preco.toFixed(2)}`);
  if (produtos[i].quantidade < 5) {
    console.log("Repor estoque");
    reporEstoque++;
  } else {
    console.log("Estoque OK");
  }
  console.log("----------------");

  if (calcularValorEstoque(produtos[i])) {
    console.log(`${produtos[i].nome}`);
  }
}

let calcularTotal = calcularValorEstoque(produtos);

console.log("\n==== Resumo ====");

let i = 0;

while (i < produtos.length) {
  if (calcularValorEstoque(produtos[i]) > 500.0) {
    console.log(`${produtos[i].nome}: Valor do estoque acima de R$500.00`);
    console.log("");
  }
  i++;
}

console.log(`Valor total do estoque: ${calcularTotal.toFixed(2)}`);
console.log(`Produto com estoque mais valioso: ${maisValioso}`);
console.log(
  `Quantidade de produtos que eprecisam de reposição: ${reporEstoque}`,
);
