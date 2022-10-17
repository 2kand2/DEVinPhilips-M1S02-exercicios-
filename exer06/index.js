<<<<<<< HEAD
let number = parseFloat(prompt("Digite um valor!"));
let impar = 0;
let par = 0;

if (number >= 0) {
  for (let i = 0; i <= number; i++) {
    if (i % 2 == 0) {
      par++;
    } else {
      impar++;
    }
  }
  alert("Numeros pares: " + par + " Números impares: " + impar);
=======
let operation = prompt("Informe a operação que deseja realizar\n  +, -, * ou /");
let value1 = parseFloat(prompt("Digite o primeiro número que deseja calcular"));
let value2 = parseFloat(prompt("Digite o segundo número que deseja calcular"));

switch (operation) {
  case "+":
    result = value1 + value2;
    alert("O resultado do seu cálculo é: " + value1 + value2);
    break;
  case "-":
    alert("O resultado do seu cálculo é: " + value1 - value2);
    break;
  case "*":
    alert("O resultado do seu cálculo é: " + value1 * value2);
    break;
  case "/":
    alert("O resultado do seu cálculo é: " + value1 / value2);
    break;
  default:
    alert("Operação inválida!");
    break;
>>>>>>> exe06Calculadora
}
