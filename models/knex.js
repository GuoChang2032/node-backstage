const configs = require('../config.js')

module.exports = require('knex')({
    client: 'mysql',
    connection: {
        host: configs.mysql.host,
        port: configs.mysql.port,
        user: configs.mysql.user,
        password: configs.mysql.password,
        database: configs.mysql.database
    },
    log: {
        error(message) {
            console.log('error:', message)
        }
    }
})