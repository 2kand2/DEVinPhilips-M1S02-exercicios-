let number;
do {
  let sum = 0;
  number = parseFloat(prompt("Informe um número para somar ou digite -1 para sair"));
  if (number != -1) {
    sum += number;
  } else {
    alert("Resultado da soma = " + sum);
  }
} while (number != -1);
