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
    const total = precio * (1 + iva);
    resultado.textContent = `Precio con IVA: ${total.toFixed(2)} €`;
  } catch (error) {
    resultado.textContent = error.message;
  }
}

botonCalcular.addEventListener("click", calcularPrecioFinal);
