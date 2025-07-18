# Despliegue en AWS

Esta guía resume un flujo de implementación típico utilizando los servicios de Amazon Web Services.

## EC2 y CodeDeploy

1. Crea una instancia EC2 basada en Ubuntu y asegúrate de instalar Java 11 y el agente de CodeDeploy.
2. Configura un proyecto de CodeDeploy y un grupo de implementación asociado a la instancia.
3. Al generar un artefacto del backend se utilizan los archivos `buildspec.yml` y `appspec.yml` incluidos en `simplQ-backend`. Estos scripts empaquetan la aplicación y ejecutan `scripts/run-jar.sh` después de copiar los archivos.
4. Sube el paquete generado a un bucket de S3 y lanza la implementación desde CodeDeploy.

## Secrets Manager

Las credenciales sensibles (por ejemplo, parámetros de base de datos o claves de terceros) deben almacenarse en AWS Secrets Manager. El backend lee el nombre y región del secreto desde `application-prod.properties` y recupera las variables al iniciar.

## Amazon SES

Para el envío de correos se utiliza Amazon Simple Email Service (SES). Registra los dominios o direcciones necesarias y configura las credenciales en el secreto antes mencionado.

## Frontend en S3 o Amplify

El directorio `simplQ-frontend` incluye un archivo `amplify.yml` que automatiza la construcción del sitio. Puedes desplegar la carpeta `build` resultante en un bucket S3 con hosting estático o emplear AWS Amplify para manejar las versiones.
