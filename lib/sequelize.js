const { Sequelize } = require('sequelize');

const { config } = require('../config');
const { connect } = require('../routes');


class SequelizeLib {
    constructor() {
        //console.log(`${config.dbName} -- ${config.dbUser} -- ${config.dbPassword}`);
        this.client = new Sequelize(`${config.dbName}`, `${config.dbUser}`, `${config.dbPassword}`, {
            host: `${config.dbHost}`,
            dialect: 'mysql',
            port: `${config.dbPort}`
        });        
    }

    async connect() {
        try {
            await this.client.authenticate();
            console.log("Autenticacion exitosa a la Base de datos");
        } catch (error) {
            console.error('No es posible conectarse a la Base de Datos:', error);
        }
    }
}

module.exports = SequelizeLib

