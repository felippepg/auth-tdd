require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

module.exports = {
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    dialect: process.env.DIALECT || 'mysql',
    storage: '__test__/database.sqlite',
    define: {
        timestamps: true,
        underscored: true
    }
}