const mysql = require('mysql');

function executeQuery(query, config, callback) {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(config);

        connection.connect((err) => {
            if (err) {
                console.error('Error connecting to database: ' + err.stack);
                return;
            }
            console.log('Connected to database as id ' + connection.threadId);
        });

        connection.query(query, (err, results, fields) => {
            if (err) {
                console.error('Error executing query: ' + err.stack);
                callback(err, null);
                return;
            }
            console.log('Query results:', results);
            console.log('Field metadata:', fields);
            resolve(results);
            callback(null, results);
            connection.end();
        });
    });
}

module.exports = executeQuery;
