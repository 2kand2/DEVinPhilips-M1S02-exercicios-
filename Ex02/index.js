let age = parseFloat(prompt("Digite a sua idade!"));

if (age > 0 && age <= 15) {
  alert("A sua idade é classificada como: Jovem");
} else if (age > 15 && age <= 64) {
  alert("A sua idade é classificada como: Adulto");
} else if (age >= 65) {
  alert("A sua idade é classificada como: Idoso");
} else {
  alert("Erro: idade inferior a 1 ano");
}
