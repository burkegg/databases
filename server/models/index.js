var db = require('../db');

module.exports = {
  messages: {
    // get all messages
    get: function (cb) {
      // userid, message, roomname, ???
      var qStr = 'select messages.id, messages.text, messages.roomname from messages \
                  left outer join users on (messages.userid = user.id) \
                  order by messages.id desc';
      db.query(qStr, function queried (error, result) {
        cb(result);
      });
      //db.query('SELECT * FROM messages', function queried (err, result) {
      // if (err) {
      //   cb(err);
      // } else {
      //   console.log('====================> rows: ', rows);
      //   cb(null, rows);
      // }
      // });
      
      
    }, 
    // create a message
    post: function (params, cb) {
      // console.log('post is called:', req);
      var qStr = '';
      db.query(qStr, function messagePosted (error, result) {
        cb(result);
      });
    } 
  },

  users: {
    // get all users
    get: function (cb) {
      var qStr = '';
      db.query(qStr, function queried(error, result) {
        cb(result);
      });
    },
    // create a user
    post: function (cb, params) {
      // only needs a name
      var qStr = 'insert into users ';
      db.query(qStr, function userPosted(error, result) {
        cb(result);
      });
    }
  }
};

