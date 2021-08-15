const jwt = require('jsonwebtoken');
const { promisify } = require('util')
module.exports = async (request, response, next) => {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).send({ message: 'token not provided' })
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, process.env.SECRET_JWT)
        request.userId = decoded.id;
        next()

    } catch (err) {
        return response.status(401).send({ message: 'token not provided' })
    }

    next()
}