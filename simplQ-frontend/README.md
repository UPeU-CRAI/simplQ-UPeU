# SimplQ

[SimplQ](https://github.com/UPeU-CRAI/simplQ-UPeU) es una solución de gestión de colas de código abierto construida con React.

### Instrucciones para configurar el entorno de desarrollo

Sigue estos pasos la primera vez que ejecutes el proyecto.

1. Instala Node 12.x siguiendo las instrucciones [aqui](https://github.com/nodesource/distributions/blob/master/README.md#debinstall).
2. Clona este proyecto.
3. Copia el archivo `.env.example` ubicado en la raíz del proyecto a `.env` (en la misma raíz) y personalízalo si es necesario.
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

En el archivo [readme](/simplq/readme.md) se detallan la estructura de archivos y las herramientas utilizadas.

# Despliegue

La aplicación puede desplegarse en cualquier servidor que sirva archivos estáticos.
