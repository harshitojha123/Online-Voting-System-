const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'my_user',
  password: 'my_password',
  database: 'my_database'
});

conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

module.exports = conn;