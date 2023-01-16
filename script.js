var saida = document.getElementById("saida");
var imprimir = "";

var mesesdoAno = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

for (var i = 0; i < mesesdoAno.length; i++) {
  imprimir += mesesdoAno[i] + "<br>";
}

saida.innerHTML = imprimir;
