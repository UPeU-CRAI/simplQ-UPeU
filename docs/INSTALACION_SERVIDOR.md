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

Tanto el backend como el frontend se configuran mediante un archivo `.env` en la raíz del proyecto. Copia el archivo de ejemplo y ajusta los valores según tu entorno:

```bash
cp .env.example .env
vim .env
```

En este archivo se definen las credenciales de la base de datos (`DB_USERNAME`, `DB_PASSWORD` y `DB_URL`) y la URL base del frontend (`BASE_URL`).

## Compilar y ejecutar el backend

```bash
cd simplQ-backend/simplq
mvn package
java -jar target/simplq-1.0.0.jar
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
