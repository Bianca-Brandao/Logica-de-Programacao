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

//ouuuu ;-;
/*let peso = 77;
let pesoNoPlaneta;

console.log("Código\tPlaneta\t\tGravidade Relativa");
console.log("1\tMercúrio\t0.37");
console.log("2\tVênus\t\t0.88");
console.log("3\tMarte\t\t0.38");
console.log("4\tJúpiter\t\t2.64");
console.log("5\tSaturno\t\t1.15");
console.log("6\tUrano\t\t1.17");

let cod = 4;

switch (cod) {
  case 1:
    pesoNoPlaneta = peso * (0.37);
    console.log(pesoNoPlaneta);
    break;
  case 2:
    pesoNoPlaneta = peso * (0.88);
    console.log(pesoNoPlaneta);
    break;
  case 3:
    pesoNoPlaneta = peso * (0.38);
    console.log(pesoNoPlaneta);
    break;
  case 4:
    pesoNoPlaneta = peso * (2.64);
    console.log(pesoNoPlaneta);
    break;
  case 5:
    pesoNoPlaneta = peso * (1.15);
    console.log(pesoNoPlaneta);
    break;
  case 6:
    pesoNoPlaneta = peso * (1.17);
    console.log(pesoNoPlaneta);
    break;
  default:
    console.log("Você saiu do sistema solar");
}*/