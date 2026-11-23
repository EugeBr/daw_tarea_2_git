# Changelog

Todos los cambios importantes de este proyecto se documentarán en este archivo.

El formato sigue las recomendaciones de [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y utiliza [Versionado Semántico](https://semver.org/lang/es/).

## [1.0.0] - 2026-11-23

### Added
- Implementación de una calculadora de precios con IVA mediante una interfaz web HTML.
- Funcionalidad para introducir precios y seleccionar diferentes porcentajes de IVA.
- Validación de los datos introducidos, admitiendo tanto la coma como el punto como separador decimal.
- Cálculo del importe del IVA y del precio final.
- Gestión de errores para campos vacíos, valores no numéricos, precios negativos y porcentajes de IVA inválidos.
- Incorporación de pruebas automatizadas con Vitest para validar las funciones de lectura de números y cálculo de precios.
- Documentación del código fuente mediante comentarios JSDoc.
- Generación de documentación API a partir de JSDoc.
- Configuración de GitHub Actions para automatizar la ejecución de pruebas, análisis del código y generación de documentación.
- Documentación de las medidas de seguridad del repositorio.

### Changed
- Configuración de `package.json` para habilitar el uso de módulos ES.
- Organización del proyecto para separar el código fuente, las pruebas y la documentación.
- Configuración del flujo de trabajo de desarrollo mediante ramas y Pull Requests.

### Fixed
- Corrección de errores detectados durante las pruebas y validaciones del código.
- Ajustes en la configuración del proyecto para garantizar la correcta ejecución de las herramientas de desarrollo y automatización.