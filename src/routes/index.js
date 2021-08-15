const SessionController = require('../controller/SessionController');
const authMiddleware = require('../middlewares/authMiddleware');
const routes = require('express').Router();


routes.post('/session', SessionController.index);

routes.use(authMiddleware);
routes.get('/dashboard', (req, res) => {
    return res.status(200).send()
})
module.exports = routes;