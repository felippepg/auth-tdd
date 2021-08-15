const Sequelize = require('sequelize');
const config = require('../../src/config/database');
const User = require('../../src/models/Users');

const connection = new Sequelize(config);
User.init(connection);

module.exports = {
    user: async () => {
        await User.truncate({ cascade: true })
    },
}