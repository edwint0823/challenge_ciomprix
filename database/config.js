const path = require('path')
const dotEnvPath = path.resolve('.env')
require('dotenv').config({path: dotEnvPath})
module.exports = {
    development: {
        host: process.env.DEV_DB_HOSTNAME_PG,
        port: process.env.DEV_DB_PORT_PG,
        username: process.env.DEV_DB_USERNAME_PG,
        password: process.env.DEV_DB_PASSWORD_PG,
        database: process.env.DEV_DB_NAME_PG,
        dialect: 'postgres',
        dialectOptions: {
            bigNumberStrings: true
        },
        logging: console.log
    },
    production: {
        username: process.env.PROD_DB_USERNAME_PG,
        password: process.env.PROD_DB_PASSWORD_PG,
        database: process.env.PROD_DB_NAME_PG,
        host: process.env.PROD_DB_HOSTNAME_PG,
        port: process.env.PROD_DB_PORT_PG,
        dialect: 'postgres',
        dialectOptions: {
            bigNumberStrings: true
        },
        logging: false
    }
}
