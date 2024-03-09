const path = require('path')
const dotEnvPath = path.resolve('.env')
require('dotenv').config({path: dotEnvPath})

const {sequelize} = require('./database/models')

const env = process.env.NODE_ENV || 'development'
const database_config = require('./database/config')[env]
const dayjs = require('dayjs')
require('dayjs/locale/es-mx')
dayjs.locale('es-mx')

sequelize
    .authenticate()
    .then(() => {
        console.log(`[Sequelize]: connexion: ${env}  database: ${database_config.database} hora: ${dayjs().format('YYYY-MM-DD HH:mm:ss')}`)
    })
    .catch(err => {
        console.error(`[Sequelize]: Error connexion: ${env}  database: ${database_config.database}`, err)
    })
module.exports = sequelize