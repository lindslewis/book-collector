const Sequelize = require('sequelize');
require('dotenv').config();

// declare sequelize
let sequelize;

// where will the environment be? heroku is pay to use, so not jaws anymore I assume, unless I'm fancy and pay for it (ugh no thanks), in the meantime just use local host 

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3001
        }
    );
}

module.exports = sequelize;