"use strict";

const campoIVA = document.getElementById("iva");
const campoPrecio = document.getElementById("precio");
const botonCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

/**
 * Convierte un texto en un número válido.
 *
 * Acepta tanto la coma como el punto como separador decimal.
 *
 * @param {string} texto - Texto que se desea convertir.
 * @returns {number} Número convertido.
 * @throws {Error} Si el campo está vacío o el valor no es numérico.
 */
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

/**
 * Calcula el precio final aplicando el IVA seleccionado.
 *
 * Obtiene el precio introducido por el usuario, valida que no sea
 * negativo y muestra el resultado con dos decimales.
 *
 * Si se produce un error durante el proceso, muestra el mensaje
 * correspondiente en el elemento de resultado.
 * 
 * Devuelve el precio con desglose.
 *
 * @returns {void}
 */
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
