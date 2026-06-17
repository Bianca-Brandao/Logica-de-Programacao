let n1 = 1;
let n2 = 2;
let n3 = 3;
let n4 = 4;
let n5 = 5;

let maior = Math.max(n1, n2, n3, n3, n5);
let menor = Math.min(n1, n2, n3, n3, n5);

console.log(`O maior número é ${maior} e o menor é ${menor}`);

//alternativa:
/*let maior, menor;

if (n1 >= n2 && n1 >= n3 && n1 >= n4 && n1 >= n5) {
    maior = n1;
} else if (n2 >= n3 && n2 >= n1 && n2 >= n4 && n2 >= n5) {
    maior = n2;
} else if (n3 >= n1 && n3 >= n2 && n3 >= n4 && n3 >= n5) {
    maior = n3;
} else if (n4 >= n2 && n4 >= n1 && n4 >= n3 && n4 >= n5) {
    maior = n4;
} else if (n5 >= n1 && n5 >= n2 && n5 >= n4 && n5 >= n3) {
    maior = n5;
}

console.log(`Maior número: ${maior}`);

if (n1 <= n2 && n1 <= n3 && n1 <= n4 && n1 <= n5) {
    menor = n1;
} else if (n2 <= n3 && n2 <= n1 && n2 <= n4 && n2 <= n5) {
    menor = n2;
} else if (n3 <= n1 && n3 <= n2 && n3 <= n4 && n3 <= n5) {
    menor = n3;
} else if (n4 <= n2 && n4 <= n1 && n4 <= n3 && n4 <= n5) {
    menor = n4;
} else if (n5 <= n1 && n5 <= n2 && n5 <= n4 && n5 <= n3) {
    menor = n5;
}

console.log(`Menor número: ${menor}`);*/