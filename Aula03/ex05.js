let n = 20;

let restoP4 = n % 4;
let restoP5 = n % 4;

if (restoP4 == 0 && restoP5 == 0) {
  console.log(`O número ${n} é divisível por 4 e 5`);
} else {
  console.log(`O número ${n} não é divisível por 4 e 5`);
}

//simplificando:
/*if (n % 4 == 0 && n % 5 == 0){
    .
    .
    .
}*/