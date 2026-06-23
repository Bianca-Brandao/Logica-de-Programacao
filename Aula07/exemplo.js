//objeto aninhado
let aluno = {
  nome: "João",
  idade: 20,
  endereco: {
    // propriedade que é um objeto
    cidade: "São Paulo",
    estado: "SP",
  },
};

// Acessando propriedades aninhadas
console.log(aluno.endereco.cidade); // "São Paulo"
console.log(aluno.endereco.estado); // "SP"