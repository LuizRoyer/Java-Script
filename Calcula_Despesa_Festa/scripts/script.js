// Carne 400gr por pessoa + 6 Horas 650
// Cerveja 1400 ml por Pessoa + 6 Horas 2450ml
// Refrigerante /agua 700ml por Pessoa + 6 Horas 1005ml
// Criança valem por 0,5

let inputHomens = document.getElementById("homens");
let inputMulheres = document.getElementById("mulheres");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
  let qdtCarne = CalcularQuantidadeCarne();
  let qdtCerveja = CalcularQuantidadeCerveja();
  let qdtRefrigerante = CalcularQuantidadeRefrigerante();

  resultado.innerHTML = `<p>${qdtCarne / 1000} Kg  de Carne </p> `;
  resultado.innerHTML += `<p>${Math.ceil(
    qdtCerveja / 350
  )} Latas de 350 ml  de Cerveja </p> `;
  resultado.innerHTML += `<p>${Math.ceil(
    qdtRefrigerante / 2000
  )} Garrafas de Refrigerante de 2 Lts </p> `;
}

function carnePorPessoa(duracao) {
  if (duracao >= 6) return 650;
  return 400;
}

function CalcularQuantidadeCarne() {
  return (
    carnePorPessoa(inputDuracao.value) * inputHomens.value +
    carnePorPessoa(inputDuracao.value) / 2 * inputCriancas.value +
    (carnePorPessoa(inputDuracao.value) - 50) * inputMulheres.value
  );
}

function cervejaPorPessoa(duracao) {
  if (duracao >= 6) return 2450;
  return 1400;
}

function CalcularQuantidadeCerveja() {
  return (
    cervejaPorPessoa(inputDuracao.value) * inputHomens.value +
    cervejaPorPessoa(inputDuracao.value) * inputMulheres.value
  );
}

function RefrigerantePorPessoa(duracao) {
  if (duracao >= 6) return 1050;
  return 600;
}
function RefrigerantePorHomem(duracao) {
    if (duracao >= 6) return 700;
    return 250;
  }
function CalcularQuantidadeRefrigerante() {
  return (
    RefrigerantePorHomem(inputDuracao.value) * inputHomens.value +
    RefrigerantePorPessoa(inputDuracao.value) * (inputMulheres.value) +
    RefrigerantePorPessoa(inputDuracao.value) / 2 * inputCriancas.value
  );
}
