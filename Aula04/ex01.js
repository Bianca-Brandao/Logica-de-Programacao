console.log("\nCódigo - Opção")
console.log(" 1 - Incluir")
console.log(" 2 - Alterar")
console.log(" 3 - Excluir")
console.log(" 4 - Pesquisar")
console.log(" 5 - Sair\n")

let opcao = 4;

switch (opcao) {
  case 1:
    console.log("Você escolheu Incluir");
    break;
  case 2:
    console.log("Você escolheu Alterar");
    break;
  case 3:
    console.log("Você escolheu Excluir");
    break;
  case 4:
    console.log("Você escolheu Pesquisar");
    break;
  case 5:
    console.log("Você escolheu Sair");
    break;
  default:
    console.log("Opção não disponível");
}