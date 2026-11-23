# Seguridad del repositorio

## 1. Protección de la rama principal

Se establece una política de protección para la rama `main` con el objetivo de evitar modificaciones accidentales o no revisadas.

Las medidas configuradas son:

- Exigir Pull Requests para incorporar cambios a `main`.
- Impedir los force pushes.
- Evitar la eliminación accidental de la rama principal.
- Exigir la resolución de conversaciones antes de fusionar cambios, cuando esté disponible.
- Recomendar la revisión de los cambios antes de aceptar un Pull Request.

## 2. Autenticación

Se aplican medidas para proteger el acceso al repositorio:

- Uso de contraseñas seguras y únicas.
- Activación de la autenticación en dos factores (2FA) en GitHub.
- Utilización de SSH o tokens de acceso personal para las operaciones Git.
- No compartir credenciales ni utilizar cuentas de otros colaboradores.

## 3. Gestión de permisos

Se aplica el principio de mínimo privilegio, concediendo a cada usuario únicamente los permisos necesarios para desarrollar sus tareas.

- Los administradores pueden gestionar la configuración y los permisos del repositorio.
- Los colaboradores pueden trabajar en ramas independientes y crear Pull Requests.
- Los usuarios con acceso de lectura pueden consultar el código sin modificarlo.

## 4. Protección de secretos

Para evitar la exposición de información confidencial:

- No se almacenan contraseñas, tokens ni claves API directamente en el código.
- Los archivos de configuración con información sensible se excluyen mediante `.gitignore`.
- Se recomienda utilizar variables de entorno para gestionar configuraciones sensibles.
- Para automatizaciones con GitHub Actions, se utilizarán GitHub Secrets cuando sea necesario.

## 5. Copias de seguridad

Se contemplan las siguientes medidas para garantizar la recuperación del proyecto:

- Mantener una copia actualizada del repositorio remoto en GitHub.
- Conservar el historial de cambios mediante commits frecuentes.
- Realizar copias de seguridad periódicas del repositorio completo mediante Git Bundle.
- Almacenar las copias de seguridad en una ubicación independiente del proyecto original.

Comando utilizado para generar una copia:

```bash
git bundle create backup-proyecto.bundle --all
```
