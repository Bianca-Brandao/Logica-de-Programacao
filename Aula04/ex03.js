let n = 6;

if (n % 2 == 0) {
  n = "par";
} else {
  n = "impar";
}

switch (n) {
  case "par":
    console.log("É par!");
    break;
  case "impar":
    console.log("É ímpar!");
    break;
}