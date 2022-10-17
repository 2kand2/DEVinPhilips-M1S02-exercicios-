let initialValue = parseFloat(prompt("Informe o valor inicial: "));
let commumDiference = parseFloat(prompt("Informe o valor da razão: "));

let pA = initialValue;
let text = initialValue.toString();
for (let i = 0; i < 9; i++) {
  pA += commumDiference;

  text += "," + pA;
}
alert("A p.a é " + text);

