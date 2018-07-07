var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) { 
      models.messages.get(req, (err, success) => {
        if (err) {
          res.status(404);
          console.log('problem retrieving all messages');
        } else {
          res.status(200).json(success);
        }
      });
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

