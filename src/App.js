require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const express = require('express');
class App {
    constructor() {
        this.express = express();
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.route(require('./routes'));
    }
}

module.exports = new App().express;