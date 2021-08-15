const User = require("../models/Users");
const bcrypt = require('bcryptjs');

module.exports = {
    login: async (request, response) => {

        const { email, password } = request.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return response.status(400).send()
        }

        const authenticate = await User.comparePassword(password, user.password_hash)

        if (authenticate === false) {
            return response.status(400).send()
        }

        return response.json({
            user,
            token: User.generateToken(user.id)
        })
    },

    create_user: async (request, response) => {
        const { name, email, password } = request.body;
        const user = await User.create({ name, email, password })

        return response.status(200).send(user)
    },

    dashboard: (request, response) => {
        return response.json({ message: 'welcome ' })
    }
}