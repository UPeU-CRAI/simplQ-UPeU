# Instalación en servidor

Este manual describe los pasos para preparar la base de datos y ejecutar los componentes del proyecto en un entorno local o en un servidor propio.

## Crear usuario administrador

Antes de instalar los servicios se recomienda crear un usuario con privilegios de sudo que ejecute las aplicaciones. A continuación se muestra un ejemplo utilizando `simplq` como nombre de usuario:

```bash
# Crea el usuario con carpeta home
sudo adduser simplq

# Añade simplq al grupo sudo
sudo usermod -aG sudo simplq

# Verifica que tenga home
ls -ld /home/simplq

# Verifica grupo sudo
groups simplq
```

## Preparar PostgreSQL

1. Instala PostgreSQL 12 o superior.
2. Crea una base de datos llamada `simplq` y un usuario con permisos de lectura y escritura. Por ejemplo:

```bash
sudo -u postgres createuser -P simplq
sudo -u postgres createdb simplq -O simplq
```

## Descargar el proyecto

```bash
git clone https://github.com/UPeU-CRAI/simplQ-UPeU.git
cd simplQ-UPeU
```

Tras clonar el repositorio, copia el archivo `.env.example` a `.env` para configurar las variables requeridas.

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
