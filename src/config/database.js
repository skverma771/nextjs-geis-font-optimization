const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost', // Change this to your database host
    user: 'root', // Change this to your database username
    password: '', // Change this to your database password
    database: 'ebike', // Change this to your database name
});

module.exports = pool;
