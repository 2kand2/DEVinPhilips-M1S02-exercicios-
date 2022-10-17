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
}
