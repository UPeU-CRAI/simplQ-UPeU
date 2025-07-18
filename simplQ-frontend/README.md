# SimplQ

![Build and Deploy](https://img.shields.io/github/issues/SimplQ/simplQ-frontend)
![Build and Deploy](https://img.shields.io/github/license/SimplQ/simplQ-frontend)
![Gitter](https://img.shields.io/gitter/room/SimplQ/community)

[SimplQ](https://simplq.me) es una solución de gestión de colas totalmente web que cualquiera puede usar para crear colas virtuales al instante. Visítanos en [ProductHunt](https://www.producthunt.com/posts/simplq) para saber más y apoyarnos.

### Instrucciones para configurar el entorno de desarrollo

Sigue estos pasos la primera vez que ejecutes el proyecto.

1. Instala Node 12.x siguiendo las instrucciones [aqui](https://github.com/nodesource/distributions/blob/master/README.md#debinstall).
2. Clona este proyecto.
3. Copia `.env.example` a `.env` dentro de la carpeta `simplq` y personalízalo si es necesario.
4. Entra en la carpeta `simplq` e instala las dependencias:

```
cd simplq
npm install
```

### Inicio del servidor de desarrollo

Dentro de la carpeta `simplq`, simplemente ejecuta:

```
npm start
```

Usamos [Storybook.js](https://storybook.js.org/) para prototipar componentes. Para iniciar storybook y ver los componentes existentes, ejecuta:

```
npm run storybook
```

# Contribuciones

Siéntete libre de hacer un fork y mejorar; envía un pull request. Busca issues etiquetadas con ![](https://img.shields.io/github/labels/SimplQ/simplQ-frontend/You%20Can%20Do%20This). Los PR en esas tareas se aceptarán con prioridad.

Hay muchas características en planificación. Si deseas contribuir, primero comenta los cambios que quieras realizar mediante el issue tracker.

En el archivo [readme](/simplq/readme.md) se detallan la estructura de archivos y las herramientas utilizadas. Por favor revísalo primero. Este es el [diseño](https://xd.adobe.com/view/ad1db074-03bf-45b1-537b-98d9d524ec82-db2c/grid) que hemos implementado y aquí puedes descargar los recursos (iconos, imágenes). El sitio web está disponible [aquí](https://simplq.me/).

Hoja de ruta de implementación: https://github.com/SimplQ/simplQ-frontend/issues/207


# Despliegue

Los cambios en la rama master se despliegan automáticamente en [dev.simplq.me](https://dev.simplq.me/). Periódicamente revisamos esa versión y la promovemos a [simplq.me](https://simplq.me).
