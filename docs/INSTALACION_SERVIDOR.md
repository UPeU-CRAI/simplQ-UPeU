# Instalación en servidor

Este manual describe los pasos para preparar la base de datos y ejecutar los componentes del proyecto en un entorno local o en un servidor propio.

## Preparar PostgreSQL

1. Instala PostgreSQL 12 o superior.
2. Crea una base de datos llamada `simplq` y un usuario con permisos de lectura y escritura. Por ejemplo:

```bash
sudo -u postgres createuser -P admin
sudo -u postgres createdb simplq -O admin
```

Opcionalmente puedes usar Docker para lanzar un contenedor de prueba:

```bash
docker run --name simplq-db -p 5432:5432 \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_USER=admin \
  -e POSTGRES_DB=simplq -d postgres
```

## Configurar variables de entorno

El backend lee las credenciales de la base de datos desde las variables `DB_USERNAME`, `DB_PASSWORD` y `DB_URL`. Define estos valores antes de iniciar la aplicación:

```bash
export DB_USERNAME=admin
export DB_PASSWORD=password
export DB_URL=jdbc:postgresql://localhost:5432/simplq
```

Para el frontend copia el archivo `.env.example` y ajusta la URL del backend:

```bash
cp simplQ-frontend/simplq/.env.example simplQ-frontend/simplq/.env
# Edita BASE_URL si es necesario
```

## Compilar y ejecutar el backend

```bash
cd simplQ-backend/simplq
mvn package
java -jar target/simplq-0.0.1-SNAPSHOT.jar
```

Para construir una imagen Docker ejecuta:

```bash
docker build -t simplq-backend simplQ-backend
```

## Compilar y ejecutar el frontend

```bash
cd simplQ-frontend/simplq
npm install
npm start
```

También puedes construir la imagen Docker disponible en `simplQ-frontend/simplq`:

```bash
docker build -t simplq-frontend simplQ-frontend/simplq
```
