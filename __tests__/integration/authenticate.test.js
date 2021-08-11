const Sequelize = require('sequelize');
const User = require('../../src/models/Users');
const config = require('../../src/config/database');

const connection = new Sequelize(config)
User.init(connection);

describe('Authenticate', () => {
    it('should return some sum of two numbers', async () => {
        const user = await User.create({
            name: 'Felippe',
            email: 'felippe@test.com',
            password_hash: '13515613'
        });

        console.log(user)
        expect(user.email).toBe('felippe@test.com');
    })
})
