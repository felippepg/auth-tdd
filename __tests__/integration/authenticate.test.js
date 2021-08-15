const factory = require('../factory');
const app = require('../../src/App');
const request = require('supertest');
const truncate = require('../utils/truncate');
const User = require('../../src/models/Users');

describe('Authenticate', () => {
    beforeEach(async () => {
        await truncate.user()
    });

    it('should athenticate with valid credentials', async () => {
        const user = await factory.create('User');

        const response = await request(app)
            .post('/session')
            .send({
                email: user.email,
                password: user.password
            });

        expect(response.status).toBe(200);
    })

    it('Should not authenticate with invalid credentials', async () => {
        const user = await factory.create('User')

        const response = await request(app)
            .post('/session')
            .send({
                email: user.email,
                password: '1230'
            });

        expect(response.status).toBe(400);
    })

    it('Should receive a JWT token when authenticate', async () => {
        const user = await factory.create('User')


        const response = await request(app)
            .post('/session')
            .send({
                email: user.email,
                password: user.password
            });

        expect(response.body).toHaveProperty('token');
    })

    it('Should be abble to access private routes when have a JWT token', async () => {
        const user = await factory.create('User')


        const response = await request(app)
            .get('/dashboard')
            .set('Authorization', `Bearer ${User.generateToken(user.id)}`)

        expect(response.status).toBe(200)
    })

    it('Should not be abble to access private routes without JWT token', async () => {
        const user = await factory.create('User')


        const response = await request(app)
            .get('/dashboard')

        expect(response.status).toBe(401)
    })

    it('Should not be abble to access private routes when JWT token is invalid', async () => {
        const user = await factory.create('User')


        const response = await request(app)
            .get('/dashboard')
            .set('Authorization', `Bearer 1237`)

        expect(response.status).toBe(401)
    })

})
