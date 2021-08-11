require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const express = require('express');
class App {
    constructor() {
        this.express = express();
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.route(require('./routes'));
        return this.routes
    }
}

module.exports = new App().express;