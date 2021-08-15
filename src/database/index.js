const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');
const Clients = require('../models/Clients');
const User = require('../models/Users');

const connection = new Sequelize(databaseConfig);
User.init(connection);

module.exports = connection;