# Resolución de conflicto Git

## Objetivo

Provocar y resolver un conflicto de Git mediante modificaciones simultáneas de una misma línea en dos ramas diferentes.

## Descripción del conflicto

Se modificó la etiqueta `<title>` del archivo `index.html` en dos ramas:

- **Rama main:** se modificó el título a "Calculadora de precios con IVA".
- **Rama feature/conflicto:** se modificó el título a "Calculadora de impuestos".

Al intentar fusionar ambas ramas mediante `git merge feature/conflicto`, Git detectó que las dos ramas habían modificado la misma línea y no pudo realizar la fusión automáticamente.

## Resolución

1. Se abrió el archivo `index.html` para localizar los marcadores del conflicto.
2. Se revisaron las dos versiones del título.
3. Se decidió utilizar un título: "Calculadora de precios con IVA".
4. Se eliminaron los marcadores del conflicto (`<<<<<<<`, `=======`, `>>>>>>>`).
5. Se guardaron los cambios y se marcó el archivo como resuelto mediante `git add index.html`.
6. Se completó la fusión con un commit.

## Comandos utilizados

```bash
git switch main
git merge feature/conflicto
git status
git add index.html
git commit -m "merge: resolucion de conflicto en titulo"
```

## Resultado

El conflicto se resolvió correctamente, conservando una única versión del título en `index.html`.

La fusión de ambas ramas se completó satisfactoriamente y el repositorio quedó sin conflictos pendientes.