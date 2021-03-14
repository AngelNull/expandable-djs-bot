const mysql = require('mysql');

// Properties used to connect to the database
const connectionProperties = {};

if (process.env.ENABLE_MYSQL === 'TRUE') {
    connectionProperties.host = process.env.MYSQL_HOST;
    connectionProperties.user = process.env.MYSQL_ROOT_USER;
    connectionProperties.password = process.env.MYSQL_ROOT_PASSWORD;
    connectionProperties.database = process.env.MYSQL_DATABASE;
    connectionProperties.encoding = 'utf8';
    connectionProperties.charset = 'utf8mb4';
} else {
    return;
}

// Create the SQL connection
const connection = mysql.createConnection(connectionProperties);
// Connect to the database
connection.connect((err) => {
    if (err) console.log(`Failed initializing database connection: ${err}`);
    else console.log(`Successfully connected to database host ${connectionProperties.host} on ${connectionProperties.database}`);
});

module.exports = { db: connection };
