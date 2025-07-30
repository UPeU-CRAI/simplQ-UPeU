# Product Requirements Document (PRD)

## Introducción
SimplQ-UPeU es una solución de código abierto para manejar colas de espera de forma virtual. El proyecto consta de un backend en Java/Spring Boot y un frontend en React que permite a los usuarios y administradores interactuar con las colas desde la web.

## Objetivo
Facilitar la creación y gestión de colas de atención remotas, reduciendo aglomeraciones y permitiendo a los usuarios esperar su turno sin necesidad de estar físicamente presentes.

## Usuarios objetivo
- **Administradores**: propietarios de colas que crean y gestionan sus propias colas.
- **Usuarios finales**: personas que se unen a una cola para recibir atención.

## Funcionalidades principales
- **Gestión de colas**: creación, consulta, actualización de parámetros (capacidad, auto-unión, notificaciones), pausa y eliminación de colas.
- **Gestión de turnos (tokens)**: creación de tokens, notificación al usuario cuando su turno está listo, consulta y eliminación de tokens.
- **Notificaciones**: envío de avisos por correo (Amazon SES), SMS y notificaciones push (Firebase).
- **Autenticación**: uso de Auth0 para el inicio de sesión o modo anónimo para usuarios sin cuenta.

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
   - El sistema puede enviar notificaciones mediante correo electrónico (SES), SMS (canal simulado o servicios externos) y notificaciones push usando Firebase.

## Arquitectura técnica
- **Backend**: aplicación Java 11 con Spring Boot. Expone una API REST y persiste los datos en PostgreSQL. Se usa Liquibase para las migraciones y Auth0 para la autenticación (o modo anónimo). Las notificaciones se gestionan a través de distintos canales (SMS, correo, push).
- **Frontend**: aplicación web React que consume la API. Se organiza en componentes y utiliza Redux para el estado global. El código se formatea con eslint y prettier, y se provee Storybook para prototipado de componentes.
- **Variables de entorno**: el archivo `.env` (copiado de `.env.example`) define las credenciales de la base de datos y otras URLs usadas por backend y frontend.

## Configuración y despliegue
1. Clonar el repositorio y copiar `.env.example` a `.env`.
2. Para el backend instalar Java y Maven, compilar con `mvn package` y ejecutar el jar.
3. Para el frontend instalar Node.js 12, ejecutar `npm install` dentro de `simplQ-frontend/simplq` y luego `npm start`.
4. En entornos de producción se puede desplegar en servidores propios o en AWS siguiendo las guías de `docs/`.

## Métricas de éxito
- Número de colas activas y tokens procesados.
- Tiempo promedio de espera por cola.
- Tasa de notificaciones entregadas correctamente.

