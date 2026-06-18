let n1 = 4;
let n2 = 8;
let operacao = "a".toLowerCase();

switch (operacao) {
  case "a":
    let media = (n1 + n2) / 2;
    console.log(media);
    break;
  case "b":
    if (n1 >= n2) {
      console.log(n1 - n2);
    } else {
      console.log(n2 - n1);
    }
    break;
  case "c":
    let produto = n1 * n2;
    console.log(produto);
    break;
  case "d":
    console.log(n1 / n2);
    break;
  default:
    console.log("Insira uma opção válida");
}