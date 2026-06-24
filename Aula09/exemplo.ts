// Exemplo POO: programação orientada a objetos
class Pessoa {
  nome: string;
  idade: number;
  constructor(nome: string, idade: number) { // argumentos -> parâmetros
    this.nome = nome; // passa o parâmetro pro objeto apontando a propriedade da classe
    this.idade = idade;
  }
  apresentar(): void { // função associada a objeto se chama método
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}
// Instanciando um objeto da classe Pessoa 
let pessoa1 = new Pessoa("Bianca", 18); // tira uma cópia da variável
pessoa1.apresentar();
// Saída: Olá, meu nome é Bianca e tenho 18 anos.