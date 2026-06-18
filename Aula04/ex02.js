let sexo = "feminino".toUpperCase();

switch (sexo) {
  case "FEMININO":
    console.log("Dirija-se ao banheiro à esquerda");
    break;
  case "MASCULINO":
    console.log("Dirija-se ao banheiro à direita");
    break;
  default:
    console.log("Banheiro inclusivo no andar superior");
}