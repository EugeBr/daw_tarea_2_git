
import { describe, it, expect } from "vitest";
import {
  leerNumero,
  calcularPrecioFinal
} from "../js/calculadora.js";

describe("leerNumero", () => {
  it("convierte números enteros", () => {
    expect(leerNumero("100")).toBe(100);
  });

  it("acepta coma decimal", () => {
    expect(leerNumero("12,50")).toBe(12.5);
  });

  it("acepta punto decimal", () => {
    expect(leerNumero("12.50")).toBe(12.5);
  });

  it("rechaza campos vacíos", () => {
    expect(() => leerNumero("")).toThrow(
      "El campo está vacío."
    );
  });

  it("rechaza valores no numéricos", () => {
    expect(() => leerNumero("abc")).toThrow(
      "no es un número válido."
    );
  });
});

describe("calcularPrecioFinal", () => {
  it.each([
    [100, 0.21, 121],
    [100, 0.10, 110],
    [100, 0.04, 104]
  ])(
    "calcula correctamente el IVA",
    (precio, iva, esperado) => {
      expect(calcularPrecioFinal(precio, iva).total)
        .toBeCloseTo(esperado);
    }
  );

  it("calcula el importe del IVA", () => {
    const resultado = calcularPrecioFinal(100, 0.21);

    expect(resultado.importeIVA).toBeCloseTo(21);
  });

  it("rechaza precios negativos", () => {
    expect(() => calcularPrecioFinal(-10, 0.21))
      .toThrow("El precio no puede ser negativo.");
  });

  it("rechaza porcentajes de IVA inválidos", () => {
    expect(() => calcularPrecioFinal(100, -0.21))
      .toThrow("El IVA no es válido.");
  });
});
