const { factory } = require('factory-girl');
const User = require('../src/models/Users');

factory.define('User', User, {
    name: 'Felippe',
    email: 'felippe@test.com',
    password: '123123'
})
module.exports = factory