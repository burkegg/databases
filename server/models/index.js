var db = require('../db');

module.exports = {
  messages: {
    get: function (req, cb) {
      
      
      //take the req
      //and do something with it to get what info is?
      //I am told, these are sequel queries
      
      callDBQuery(info, (err, success) => {
        //ask the DB for the info...
        if (err) {
          //db failed you...or perhaps you failed the db.
          cb(err, null);
        } else {
          cb(null, success);
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

