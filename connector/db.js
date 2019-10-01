const initOptions = {
    query(e) {
        console.log('------QUERY------');
        console.log(e.query);
        console.log('-----------------');
    },
};
const pgp = require('pg-promise')(initOptions);

const connection = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.USER,
};

module.exports = pgp(connection);
