const { Model, DataTypes } = require("sequelize/types");

class User extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            passwordHash: DataTypes.STRING
        }, {
            tableName: 'users'
        }, {
            sequelize: connection
        })
    }
}

module.exports = User;