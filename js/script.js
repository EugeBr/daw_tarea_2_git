"use strict";

const campoIVA = document.getElementById("iva");
const campoPrecio = document.getElementById("precio");
const botonCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

function leerNumero(texto) {
  const limpio = texto.trim().replace(",", ".");
  if (limpio === "") {
    throw new Error("El campo está vacío.");
  }
  const numero = Number(limpio);
  if (!Number.isFinite(numero)) {
    throw new Error(`"${texto}" no es un número válido.`);
  }
  return numero;
}

function calcularPrecioFinal() {
  try {
    const precio = leerNumero(campoPrecio.value);
    if (precio < 0) {
      throw new Error("El precio no puede ser negativo.");
    }
    const iva = Number(campoIVA.value);
    const importeIVA = precio * iva;
    const total = precio + importeIVA;

    resultado.textContent =
      `Precio sin IVA: ${precio.toFixed(2)} € | ` +
      `IVA (${(iva * 100).toFixed(0)} %): ${importeIVA.toFixed(2)} € | ` +
      `Precio final: ${total.toFixed(2)} €`;
  } catch (error) {
    resultado.textContent = error.message;
  }
}

botonCalcular.addEventListener("click", calcularPrecioFinal);
