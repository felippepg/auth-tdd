const { urlencoded } = require('express');
const express = require('express');
class App {
    constructor() {
        this.express = express();
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }))
    }

    routes() {
        this.express.use(require('./routes/index'));
    }
}

module.exports = new App().express;