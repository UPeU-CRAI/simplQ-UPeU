# SimplQ Backend

[![Build Status](https://travis-ci.org/SimplQ/simplQ-backend.svg?branch=master)](https://travis-ci.org/SimplQ/simplQ-backend)

[SimplQ](https://simplq.me) is a completely web based queue management solution that anyone can use to create instant queues. 

## Environment Setup Instructions

El proyecto está escrito en Java y se despliega en AWS. Sigue estos pasos la primera vez que ejecutes el proyecto.

1. Instala Java 11 y Maven.
2. Clona este proyecto.
3. Construye el jar:

```
mvn package
```
4. Ejecuta un servidor de base de datos para desarrollo:

```
docker run --name simplq-db -p 5432:5432 -e POSTGRES_PASSWORD=password -e POSTGRES_USER=admin -e POSTGRES_DB=simplq -d postgres
```

5. Ejecuta el jar:

```
java -jar simplq/target/simplq-0.0.1-SNAPSHOT.jar 
```

Seguimos las [Guías de estilo de Java de Google](https://github.com/google/styleguide). Para Intellij puedes instalar el plugin [google-java-format](https://plugins.jetbrains.com/plugin/8527-google-java-format); para Eclipse y otros IDE consulta [esta guía](https://github.com/google/google-java-format).

### Pruebas locales

Prueba las APIs con Postman: hay una colección de prueba disponible [aquí](https://www.getpostman.com/collections/252a096a86fc550fb5fb).

Ejecuta las pruebas de integración:

```
mvn test
```

## Ejecución en producción

Genera el jar:
```
mvn package
```

Por defecto el jar usa una base de datos H2 en memoria. Esto es solo para desarrollo. Para una configuración de producción debes crear una base de datos PostgreSQL y pasar los parámetros de conexión como variables de entorno:

```
export DB_USERNAME=<user-name>
export DB_PASSWORD=<password>
export DB_URL=jdbc:postgresql://<host>:<port>/<db>
export TOKEN_URL=<base-token-url>
java -Dspring.profiles.active=prod -jar simplq/target/simplq-0.0.1-SNAPSHOT.jar 
```

Usamos [Liquibase](https://www.liquibase.org/) para las migraciones de base de datos. Para ejecutarlas:
```
mvn liquibase:update -Ddb.username=<username> -Ddb.password=<password> -Ddb.url=jdbc:postgresql://<host>:<port>/<db>
```

# Contribuciones

Siéntete libre de hacer un fork y mejorar; envía un pull request. Estaremos encantados de colaborar contigo.

