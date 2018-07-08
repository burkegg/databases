var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      
      
      connection.query('SELECT * FROM messages', function queried (err, rows, fields) {
        if (err) {
          cb(err);
        } else {
          console.log('====================> rows: ', rows);
          cb(null, rows);
        }
      });
    // back yo db
      
      
    }, // a function which produces all the messages
    post: function (req, cb) {
      // console.log('post is called:', req);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

