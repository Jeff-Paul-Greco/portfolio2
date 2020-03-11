const db = require("../models");

// Defining methods for the messagesController
module.exports = {
  create: function(req, res) {
    db.Message
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .then(console.log(dbModel))
      .then()
      .catch(err => res.status(422).json(err));
  }
};