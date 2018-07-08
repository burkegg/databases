var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
    
var connection = mysql.createConnection({
  host: 'localhost', 
  user: 'student',
  password: 'student',
  database: 'chat'
});

connection.connect();

// connection.query('SELECT * FROM messages', function queried (err, rows, fields) {
//   if (err) {
//     throw err;
//   }
//   console.log('fields =============>', fields);
//   console.log('The solution is index.js DB: ', rows);
  
// });

//connection.end();


module.exports = connection;



// Make a database query.
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "yourusername",
//   password: "yourpassword"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

/// Note - is "root" wrong again?  Student?

// callDBQuery(cb);