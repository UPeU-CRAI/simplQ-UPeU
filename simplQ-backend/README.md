# SimplQ Backend

SimplQ Backend es la API que gestiona las colas y los turnos.

## Environment Setup Instructions

El proyecto está escrito en Java. Sigue estos pasos la primera vez que ejecutes el proyecto.

1. Instala Java 11 y Maven.
2. Clona este proyecto.
3. Construye el jar:

```
mvn package
```
4. Ejecuta un servidor de base de datos para desarrollo:

```
docker run --name simplq-db -p 5432:5432 -e POSTGRES_PASSWORD=simplq -e POSTGRES_USER=simplq -e POSTGRES_DB=simplq -d postgres
```

5. Copia el archivo `.env.example` ubicado en la raíz del repositorio a `.env` y
   completa las variables requeridas.
6. Ejecuta el jar:

```
java -jar simplq/target/simplq-1.0.0.jar
```

Seguimos las [Guías de estilo de Java de Google](https://github.com/google/styleguide). Para Intellij puedes instalar el plugin [google-java-format](https://plugins.jetbrains.com/plugin/8527-google-java-format); para Eclipse y otros IDE consulta [esta guía](https://github.com/google/google-java-format).

### Pruebas locales

Para ejecutar las pruebas de integración:

```
mvn test
```

## Ejecución en producción

Genera el jar:
```
mvn package
```

Por defecto el jar usa una base de datos H2 en memoria. Esto es solo para desarrollo. Para una configuración de producción debes crear una base de datos PostgreSQL y definir las variables de conexión. Estas pueden cargarse desde tu entorno o desde el archivo `.env`:

```
export DB_USERNAME=<user-name>
export DB_PASSWORD=<password>
export DB_URL=jdbc:postgresql://<host>:<port>/<db>
export TOKEN_URL=<base-token-url>
java -Dspring.profiles.active=prod -jar simplq/target/simplq-1.0.0.jar
```

Usamos [Liquibase](https://www.liquibase.org/) para las migraciones de base de datos. Para ejecutarlas:
```
mvn liquibase:update -Ddb.username=<username> -Ddb.password=<password> -Ddb.url=jdbc:postgresql://<host>:<port>/<db>
```

# Contribuciones

Siéntete libre de hacer un fork y mejorar; envía un pull request. Estaremos encantados de colaborar contigo.

