"use strict";

/**
 * Convierte un texto en un número válido.
 *
 * Acepta tanto la coma como el punto como separador decimal.
 *
 * @param {string} texto - Texto que se desea convertir.
 * @returns {number} Número convertido.
 * @throws {Error} Si el campo está vacío o el valor no es numérico.
 */
export function leerNumero(texto) {
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
 * Calcula el desglose del precio aplicando el IVA seleccionado.
 *
 * @param {number} precio - Precio sin IVA.
 * @param {number} iva - Porcentaje de IVA en formato decimal.
 * @returns {{precio: number, importeIVA: number, total: number}}
 * Desglose del precio calculado.
 * @throws {Error} Si el precio es negativo o el IVA no es válido.
 */
export function calcularPrecioFinal(precio, iva) {

  if (precio < 0) {
    throw new Error("El precio no puede ser negativo.");
  }

  if (!Number.isFinite(iva) || iva < 0) {
    throw new Error("El IVA no es válido.");
  }

  const importeIVA = precio * iva;
  const total = precio + importeIVA;

  return {
    precio,
    importeIVA,
    total,
  };
}
