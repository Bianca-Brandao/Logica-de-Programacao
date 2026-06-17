let peso = 70;
let planeta = 1;

switch (planeta) {
  case 1:
    planeta = 0.37; //grMercurio
    break;
  case 2:
    planeta = 0.88; //grVenus
    break;
  case 3:
    planeta = 0.38; //grMarte
    break;
  case 4:
    planeta = 2.64; //grJupter
    break;
  case 5:
    planeta = 1.15; //grSaturno
    break;
  case 6:
    planeta = 1.17; //grUrano
    break;
  default:
    console.log("Insira uma opção disponível");
}

let pesoPlaneta = (peso / 10) * planeta;
console.log(`Seu peso seria: ${pesoPlaneta}Kg`);