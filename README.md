# Challenge CIOMPRIX

Proyecto sobre prueba de codificación para el cargo Desarrollador full stack en CIOMPRIX por Edwin Tobias Ariza Tellez

## Prerrequisitos

Para un correcto funcionamiento debe contar con las siguientes tecnologías instaladas en su equipo

| Herramienta   | Versión            | link de descarga                                           |
|:--------------|:-------------------|:-----------------------------------------------------------|
| Base de datos | **PostgreSQL 15+** | [PostgreSQL](https://www.postgresql.org/download/windows/) |
| Node.js       | **Node 18+**       | [Node.js](https://nodejs.org/en/download/current)          |
| npm           | **Npm 8.6+**       |                                                            |

## Variables de entorno

Para el correcto funcionamiento de la aplicación debe agregar las variables de entorno en el archivo **.env**

| Variable              | Descripción                                              | Valor sugerido                       |
|:----------------------|:---------------------------------------------------------|:-------------------------------------|
| `NODE_ENV`            | Entorno de la aplicación                                 | development                          |
| `APP_PORT`            | Puerto para exponer el api                               | 8080                                 |
| `DEV_DB_HOSTNAME_PG`  | Host donde se ubica la base de datos de desarrollo       | localhost                            |
| `DEV_DB_PORT_PG`      | Puerto de la base de datos de desarrollo                 | 5432                                 |
| `DEV_DB_USERNAME_PG`  | Usuario de la base de datos de desarrollo                | postgres                             |
| `DEV_DB_PASSWORD_PG`  | Contraseña del usuario de la base de datos de desarrollo |                                      |
| `DEV_DB_NAME_PG`      | Nombre de la base de datos de desarrollo                 | challenge_ciomprix                   |
| `PROD_DB_HOSTNAME_PG` | Host donde se ubica la base de datos de producción       | localhost                            |
| `PROD_DB_PORT_PG`     | Puerto de la base de datos de producción                 | 5432                                 |
| `PROD_DB_USERNAME_PG` | Usuario de la base de datos de producción                | postgres                             |
| `PROD_DB_PASSWORD_PG` | Contraseña del usuario de la base de datos de producción |                                      |
| `PROD_DB_NAME_PG`     | Nombre de la base de datos de producción                 | challenge_ciomprix                   |
| `SECRETKEY`           | Key usada para la encriptación de tokens con jwt         | key robusta con minimo 15 caracteres |

**NOTA:**

Estas variables también las puede encontrar en el archivo **.env-example**

## Instalación y puesta en marcha

Para instalar el proyecto debe inicialmente usar los siguientes comandos:

Instalar dependencias

```bash
cd challenge_ciomprix
npm install 
```

Correr migraciones

```bash
npx sequelize-cli db:migrate
```

Correr seeders para datos dummy

```bash
npx sequelize-cli db:seed:all
```

**NOTA:**

En caso de error en el comando verificar las variables de entorno si persiste correr los siguientes comandos desde la
raiz del proyecto

```bash
npm install --save-dev sequelize-cli
npx sequelize-cli init
```

Iniciar servidor

```bash
npm run start
```

## Credenciales de usuarios dummy

las credenciales de los usuarios son los siguientes

| correo                | contraseña    | tipo de usuario |
|:----------------------|:--------------|:----------------|
| admin@admin.com       | 4dm1nPaS$w0rd | administrador   |
| johndoe@example.com   | password123   | estudiante      |
| janesmith@example.com | password456   | estudiante      |

## Visualizar documentación de endpoints

Para poder visualizar la documentación realizada en swagger puedes acceder desde el navegador a la url

```http
  http://server_host:server_port/api-docs
```

## Authors

- [@edwint0823](https://github.com/edwint0823)

