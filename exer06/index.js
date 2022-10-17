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
}
