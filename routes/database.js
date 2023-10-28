const mysql = require('mysql2');

// Create connection to database that can be exported for use
// in other modules
module.exports = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kerbside"
  });
