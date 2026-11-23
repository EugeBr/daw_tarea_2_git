"use strict";

import { leerNumero, calcularPrecioFinal } from "./calculadora.js";

const campoIVA = document.getElementById("iva");
const campoPrecio = document.getElementById("precio");
const botonCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

/**
 * Calcula el precio final aplicando el IVA seleccionado.
 *
 * Obtiene el precio y el porcentaje de IVA introducidos,
 * valida los datos y muestra el desglose del cálculo.
 *
 * Si se produce un error, muestra el mensaje correspondiente.
 *
 * @returns {void}
 */
function mostrarResultado() {
  try {
    const precio = leerNumero(campoPrecio.value);
    const iva = Number(campoIVA.value);

    const calculo = calcularPrecioFinal(precio, iva);

    resultado.textContent =
      `Precio sin IVA: ${calculo.precio.toFixed(2)} € | ` +
      `IVA (${(iva * 100).toFixed(0)} %): ${calculo.importeIVA.toFixed(2)} € | ` +
      `Precio final: ${calculo.total.toFixed(2)} €`;
  } catch (error) {
    resultado.textContent = error.message;
  }
}

botonCalcular.addEventListener("click", mostrarResultado);
