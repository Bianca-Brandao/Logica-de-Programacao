let nomes = ["Roger", "Carlos", "Sueli", "Larissa", "Amanda"];

let op = "sim".toUpperCase();
let nome;
let mudaOP = 1; //simula o input do usuário

while (op == "SIM") {
  nome = "Amanda";

  for (let i = 0; i < nomes.length; i++) {
    if (nome == nomes[i]) {
      console.log(`${nome} existe no vetor`);
    }
  }

  mudaOP++; //simula o input do usuário
  if (mudaOP == 3) {
    op = "NÃO";
  }
}