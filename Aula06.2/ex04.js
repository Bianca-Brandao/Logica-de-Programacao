let a = [
  [11, 12, 13],
  [22, 23, 24],
  [33, 34, 35],
  [44, 45, 46],
  [55, 56, 57],
];

let b = [
  [66, 67, 68],
  [77, 78, 79],
  [88, 89, 90],
  [99, 10, 20],
  [30, 40, 50],
];

let c = [];

for (let i = 0; i < 5; i++) {
  c[i] = []; //teve que inicializar a matriz com um valor vazio para reconhecer
  for (let j = 0; j < 3; j++) {
    c[i][j] = a[i][j] + b[i][j];
  }
}

console.log(a);
console.log(b);
console.log(c);