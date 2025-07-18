# simplQ-UPeU

simplQ-UPeU es una solución completa de código abierto para administrar colas de espera virtuales. El proyecto se divide en un **backend** desarrollado en Java/Spring Boot y un **frontend** construido con React.

## Índice de subproyectos

- [Backend](simplQ-backend/README.md): guía de desarrollo y despliegue del API.
- [Frontend](simplQ-frontend/README.md): instrucciones para la aplicación web.
- [Estructura del frontend](simplQ-frontend/simplq/readme.md): detalles técnicos del código React.

## Arquitectura general

- **Backend (`simplQ-backend`)**: expone una API REST para gestionar colas y turnos. Implementa autenticación mediante Auth0 (o modo anónimo), persiste datos en PostgreSQL y permite enviar notificaciones por correo electrónico, SMS o notificaciones push.
- **Frontend (`simplQ-frontend`)**: aplicación web que consume la API y permite a usuarios y administradores interactuar con las colas de forma sencilla.

## Flujos principales

1. **Gestión de colas**
   - Crear una nueva cola especificando un nombre único.
   - Consultar colas propias y ver su estado (activa, pausada o eliminada).
   - Actualizar parámetros de la cola como la capacidad máxima, si se permite autounirse y si se enviarán notificaciones por correo electrónico.
   - Pausar o eliminar una cola.

2. **Gestión de turnos (tokens)**
   - Crear un turno para una cola determinada proporcionando nombre y número de contacto (y opcionalmente email).
   - Recibir notificaciones cuando el administrador marque el turno como listo.
   - Consultar el estado de un turno o eliminarlo de la cola.

3. **Notificaciones**
   - El sistema puede enviar notificaciones mediante correo electrónico (Amazon SES), SMS (canal simulado o servicios externos) y notificaciones push usando Firebase.

## Requisitos para desarrollo local

Antes de iniciar, copia el archivo `.env.example` a `.env` en la raíz del proyecto y completa los valores correspondientes.
Este mismo archivo se utiliza para configurar tanto el backend como el frontend.

### Backend

1. Java 11 y Maven instalados.
2. Base de datos PostgreSQL disponible localmente.

Pasos básicos:

```bash
cd simplQ-backend/simplq
mvn package
# Asegúrate de que PostgreSQL esté en ejecución y disponga de la base de datos "simplq"
java -jar target/simplq-0.0.1-SNAPSHOT.jar
```

### Frontend

1. Node.js 12.x instalado.

```bash
cd simplQ-frontend/simplq
npm install
npm start
```

## Más información

## Instalación

- [Instalación en servidor](docs/INSTALACION_SERVIDOR.md)
- [Despliegue en AWS](docs/INSTALACION_AWS.md)

Cada módulo incluye un `README.md` con detalles adicionales. Para conocer la estructura de código del frontend consulta `simplQ-frontend/simplq/readme.md` y para el backend `simplQ-backend/README.md`.

Contribuciones y mejoras son bienvenidas.

## Historial de versiones

- **v0.1.0** - Versión inicial del proyecto con backend y frontend base.
