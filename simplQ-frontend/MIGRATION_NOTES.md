# Migración de dependencias Frontend

Este resumen documenta los pasos aplicados para actualizar el proyecto React ubicado en `simplQ-frontend/simplq`.

## Comandos ejecutados

```
npm install -g npm-check-updates
ncu -u
# Se editaron versiones manualmente para evitar incompatibilidades
npm install
npm audit fix
# Se evitó `npm audit fix --force` ya que degradaba `react-scripts` a 0.0.0
```

## Cambios principales

- Actualización de React y ReactDOM a `17.0.2`.
- Migración de `react-scripts` a `5.0.1` y reemplazo de `node-sass` por `sass`.
- Actualización de Material UI v4 a sus últimos parches.
- Actualización de Storybook y ESLint a versiones recientes.
- Ajuste de versiones para mantener compatibilidad (por ejemplo `react-redux@8` y `react-qrcode-logo@2.10.0`).

## Problemas encontrados

- Varias dependencias más recientes requerían React 18+, por lo que se fijó React 17.
- `npm audit fix --force` intentaba instalar `react-scripts@0.0.0`, por lo que se descartó su uso.
- Algunas librerías (p.ej. `reactour`) no son compatibles con `styled-components` v6, así que se mantuvo la serie 5.

## Tareas pendientes

- Revisar manualmente la aplicación y las historias de Storybook.
- Ejecutar ESLint y pruebas (`npm test`) para validar que no haya errores de compilación.
- Evaluar vulnerabilidades restantes reportadas por `npm audit`.
