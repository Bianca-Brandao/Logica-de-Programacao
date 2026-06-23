let alunos = [
  { nome: "Bianca", idade: 18 },
  { nome: "Maryanne", idade: 22 },
  { nome: "Maria Eduarda", idade: 22 },
  { nome: "Ana", idade: 20 },
  { nome: "Lívia", idade: 18 },
  { nome: "Macelli", idade: 17 },
  { nome: "Estela", idade: 20 },
];

console.log(alunos);

for (let aluno of alunos) {
  if (aluno.idade >= 18) {
    console.log(`Maior de idade: ${aluno.nome}`);
  } else {
    console.log(`Menor de idade: ${aluno.nome}`);
  }
}

//ou-
/*for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].idade >= 18){
    . . .
  }
}*/