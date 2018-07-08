var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, success) => {
        res.json(results);
      });
        
      //   if (err) {
      //     res.status(404);
      //     // console.log('problem retrieving all messages');
      //   } else {
      //     res.status(200).json(success);
      //   }
      // });
      //res.send('Hello World!')
      // res.send();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      params = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(params, function posted(err, success) {
        res.sendStatus(201);
      });
        
        
        
        
      //   if (err) {
      //     res.status(501);
      //     console.log('problem posting message');
      //   } else {
      //     res.status(201).json();  // turn it into a json object and return it?
      //   }
      // });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

