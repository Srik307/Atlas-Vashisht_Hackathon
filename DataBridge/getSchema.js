const mysql = require('mysql');

function getSchema(config) {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(config);

    connection.connect(err => {
      if (err) {
        reject(err);
        return;
      }

      connection.query('SHOW TABLES', (err, results) => {
        if (err) {
          reject(err);
          return;
        }

        const tables = results.map(row => row['Tables_in_' + config.database]);

        connection.end();

        resolve(tables);
      });
    });
  });
}

module.exports = getSchema;
