# Práctica 2 - Git, documentación e integración continua

Este proyecto consiste en una aplicación web sencilla que permite calcular el precio final de un producto o servicio aplicando el Impuesto sobre el Valor Añadido (IVA).

La aplicación cuenta con una interfaz web básica e intuitiva que permite introducir un precio sin IVA, seleccionar el porcentaje de impuesto y obtener el importe del IVA y el precio final.

El proyecto se desarrolla como parte de la Práctica 2, cuyo objetivo es trabajar con Git, documentación del código, pruebas automatizadas, seguridad del repositorio e integración continua mediante GitHub Actions.

## 🚀 Tecnologías y herramientas utilizadas

- **HTML5:** estructura de la interfaz web.
- **JavaScript (ES Modules):** implementación de la lógica de cálculo y validación.
- **CSS:** estilos de la interfaz.
- **Node.js y npm:** gestión del entorno y las dependencias del proyecto.
- **Vitest:** ejecución de pruebas automatizadas.
- **ESLint:** análisis estático y control de calidad del código.
- **Prettier:** formato y consistencia del código fuente.
- **JSDoc:** documentación del código JavaScript.
- **Git y GitHub:** control de versiones y alojamiento del repositorio.
- **GitHub Actions:** automatización de pruebas, análisis y generación de documentación.

## 📁 Estructura del proyecto

```text
proyecto/
├── .github/
│   └── workflows/
│       └── ci.yml
├── js/
│   ├── calculadora.js
│   └── script.js
├── tests/
│   └── calculadora.test.js
├── docs/
│   └── ... documentación API generada
├── index.html
├── package.json
├── package-lock.json
├── eslint.config.js
├── .gitignore
├── CHANGELOG.md
└── README.md
```

## ⚙️ Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

### 2. Acceder a la carpeta del proyecto

```bash
cd nombre-del-proyecto
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Ejecutar la aplicación

Abrir el archivo `index.html` en el navegador.

También se puede utilizar la extensión **Live Server** de Visual Studio Code para ejecutar la aplicación en un servidor local.

## ✨ Funcionalidades

- Introducir un precio sin IVA.
- Seleccionar el porcentaje de IVA aplicable.
- Calcular automáticamente el importe correspondiente al IVA.
- Obtener el precio final con el impuesto incluido.
- Mostrar los resultados con dos decimales y el símbolo de euro (€).
- Aceptar números con coma o punto como separador decimal.
- Validar los datos introducidos para evitar valores incorrectos.

## ✔️ Validaciones

La aplicación incorpora controles para evitar errores durante los cálculos:

- **Campo vacío:** muestra un mensaje indicando que debe introducirse un precio.
- **Valor no numérico:** informa cuando el valor introducido no es válido.
- **Precio negativo:** impide realizar el cálculo si el precio es inferior a cero.
- **IVA no válido:** impide realizar el cálculo cuando el porcentaje de IVA no es válido.

## 🧪 Pruebas automatizadas

El proyecto utiliza **Vitest** para comprobar el correcto funcionamiento de las funciones principales de la calculadora.

Las pruebas incluyen:

- Conversión de números enteros.
- Aceptación de coma y punto como separadores decimales.
- Rechazo de campos vacíos y valores no numéricos.
- Cálculo correcto del IVA para diferentes porcentajes.
- Cálculo del importe del impuesto.
- Rechazo de precios negativos.
- Validación de porcentajes de IVA incorrectos.

Para ejecutar las pruebas:

```bash
npm run test
```

## 🔍 Calidad y formato del código

Se utilizan herramientas para mantener la calidad y consistencia del código:

**ESLint**

Permite analizar el código JavaScript y detectar errores y posibles problemas.

```bash
npm run lint
```

## 📚 Documentación del código

El código JavaScript está documentado mediante comentarios **JSDoc**, describiendo las funciones, parámetros, valores de retorno y posibles errores.

A partir de estos comentarios se genera automáticamente la documentación API del proyecto.

La documentación se integra en el flujo de trabajo de GitHub Actions para comprobar que puede generarse correctamente.

## 🔄 Integración continua (GitHub Actions)

El repositorio incorpora un pipeline de integración continua mediante GitHub Actions.

Este proceso automatiza las comprobaciones del proyecto cuando se realizan cambios en el repositorio.

El pipeline contempla:

- Ejecución de las pruebas automatizadas con Vitest.
- Análisis estático del código mediante ESLint.
- Generación de documentación a partir de JSDoc.

## 🔐 Seguridad del repositorio

Se han documentado y configurado medidas orientadas a proteger el repositorio y garantizar la integridad del proyecto:

- Protección de la rama principal `main`.
- Uso de Pull Requests para integrar cambios.
- Prevención de modificaciones forzadas y eliminación accidental de la rama principal.
- Gestión de permisos siguiendo el principio de mínimo privilegio.
- Protección de credenciales, tokens y claves sensibles.
- Exclusión de archivos sensibles mediante `.gitignore`.
- Uso de GitHub Secrets para gestionar información confidencial en automatizaciones.
- Copias de seguridad del repositorio mediante Git Bundle.

## 🌿 Control de versiones

El desarrollo del proyecto utiliza Git siguiendo un flujo de trabajo basado en ramas:

- `main`: rama principal con la versión estable del proyecto.
- `feature/*`: ramas destinadas al desarrollo de nuevas funcionalidades o mejoras.
- Pull Requests: mecanismo utilizado para revisar e integrar los cambios en la rama principal.

Se utilizan commits descriptivos para facilitar el seguimiento de los cambios realizados.

## 📋 Historial de cambios

Los cambios y mejoras de cada versión se documentan en el archivo [CHANGELOG.md](CHANGELOG.md), siguiendo el formato **Keep a Changelog**.

La primera versión estable del proyecto se identifica mediante la etiqueta Git `v1.0.0`.
