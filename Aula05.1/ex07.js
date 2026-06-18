let i = 0;
let soma = 0;

while (i <= 500) {
  if (i % 2 == 0) {
    soma += i;
    console.log(`${soma}`);
  }
  i++;
}