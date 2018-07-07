var db = require('../db');
// var mysql = require('mysql');


module.exports = {
  messages: {
    get: function (req, cb) {
      
      
      //interpret the request
      //query 1 particular message? or query all messages?
      //call the correct query. example:

    
      
      db.connection.query('SELECT * FROM messages', function queried (err, rows, fields) {
        if (err) {
          cb(err);
        } else {
          console.log('fields =============>', fields);
          console.log('The solution is models: ', rows);
          cb(null, rows);
        }
       
       
      });
        
      
      
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

