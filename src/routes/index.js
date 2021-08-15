const SessionController = require('../controller/SessionController');
const authMiddleware = require('../middlewares/authMiddleware');
const User = require('../models/Users');
const routes = require('express').Router();


routes.post('/session', SessionController.login);
routes.post('/sign-up', SessionController.create_user);

routes.use(authMiddleware);
routes.get('/dashboard', SessionController.dashboard);

module.exports = routes;