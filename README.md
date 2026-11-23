
# Práctica 2 -GIT, documentación e integración continua.

Este proyecto consiste en una aplicación web sencilla que permite calcular el precio final de un producto o servicio aplicando el Impuesto sobre el Valor Añadido (IVA) del 21 % sobre el precio original.

La aplicación cuenta con una interfaz básica e intuitiva que permite introducir un precio sin IVA y obtener automáticamente el importe final con el impuesto incluido.

## 🚀 Tecnologías utilizadas

- HTML5
- JavaScript

## 📁 Estructura del proyecto

```text
proyecto/
├── index.html
├── js/
│   └── script.js
├── .gitignore
└── README.md
```

## ⚙️ Instalación y ejecución

1. Clona este repositorio:

   ```bash
   git clone URL_DEL_REPOSITORIO
   ```

2. Accede a la carpeta del proyecto:

   ```bash
   cd nombre-del-proyecto
   ```

3. Abre el archivo `index.html` en tu navegador.

   También puedes utilizar la extensión **Live Server** de VS Code.

4. Funcionalidades:

- Introducir un precio sin IVA.

- Calcular el precio final aplicando un IVA del 21 %.

- Mostrar el resultado con dos decimales y el símbolo de euro (€).

- Aceptar números con coma o punto como separador decimal.

- Validar los datos introducidos para evitar valores incorrectos.

5. Validaciones:

- Campo vacío: muestra un mensaje indicando que debe introducirse un precio.

- Valor no numérico: informa cuando el valor introducido no es válido.

- Precio negativo: impide realizar el cálculo si el precio es inferior a cero.