const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class User extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            //campo não é criado na base de dados
            password: DataTypes.VIRTUAL,
            password_hash: DataTypes.STRING
        }, {
            sequelize: connection,
            hooks: {
                beforeSave: async user => {
                    if (user.password) {
                        user.password_hash = await bcrypt.hash(user.password, 8)
                    }
                }
            }
        })

    }

    static generateToken(user_id) {
        return jwt.sign({ id: user_id }, process.env.SECRET_JWT)
    }

    static async comparePassword(password, password_hash) {
        return await bcrypt.compare(password, password_hash);

    }
}


module.exports = User;
