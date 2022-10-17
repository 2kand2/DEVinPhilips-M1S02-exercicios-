<<<<<<< HEAD
let qntNumeroPrimo = 0;
for (let i = 0; i <= 1000; i++) {
  let divisoes = 0;

  for (let j = 0; j <= i; j++) {
    if (i % j == 0) {
      divisoes++;
    }
  }
  if (divisoes == 2) {
    console.log(i);
    qntNumeroPrimo++;
  }
  console.log("Números de divisões " + divisoes);
}
console.log("Existem " + qntNumeroPrimo + " números primos entre 0 e 1000");
=======
let initialValue = parseFloat(prompt("Informe o valor inicial: "));
let commumDiference = parseFloat(prompt("Informe o valor da razão: "));

let pA = initialValue;
let text = initialValue.toString();
for (let i = 0; i < 9; i++) {
  pA += commumDiference;

  text += "," + pA;
}
alert("A p.a é " + text);
>>>>>>> exe09calculadoraDePA
