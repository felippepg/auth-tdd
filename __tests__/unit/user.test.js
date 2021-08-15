const bcrypt = require('bcryptjs');
const User = require('../../src/models/Users');
const truncate = require('../utils/truncate');


describe('User auth', () => {
    beforeEach(async () => {
        await truncate.user()
    });

    it('Should encrypt user password', async () => {

        const user = await User.create({
            name: 'Felippe',
            email: 'felippe@test.com',
            password: '123123'
        });

        expect(await bcrypt.compare('123123', user.password_hash)).toBe(true)
    });
})