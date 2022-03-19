var listaMed = [];
var somaEntradas = 0;

var textoElementos = "";
var textoMed = "";

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    document.getElementById("btnAddMed").click();
  }
});

function addMed() {
  var valorEntrada = document.getElementById("media").value;

  if (valorEntrada == "") {
    document.getElementById("media").value = "";
  } else {
    somaEntradas = somaEntradas + parseFloat(valorEntrada);
    listaMed.push(parseFloat(valorEntrada));

    var elementosInseridos = document.getElementById("valoresInseridos");
    textoElementos =
      textoElementos + "<p>Valor inserido = " + valorEntrada + "</p>";
    elementosInseridos.innerHTML = textoElementos;
    document.getElementById("media").value = "";
  }
}

function calcularMed() {
  var medFinal = somaEntradas / listaMed.length;

  var elementoMed = document.getElementById("medCalculada");
  textoMed = "<p>A média final é = " + medFinal + "</p>";
  elementoMed.innerHTML = textoMed;
}