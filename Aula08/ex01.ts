//A
function apresentar(): void {
  console.log("Bem-vindo ao curso de TypeScript!");
}
apresentar();

//B
function exibirData(): void {
  console.log(new Date().toLocaleDateString()); //new: chama o constructor e cria uma instância
  //no caso de uma classe do JS que exibe a data //exibe a data atual e converte pro formato local
}
exibirData();
exibirData();
exibirData();