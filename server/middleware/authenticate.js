var { User } = require('../models/user');

var authenticate = (req, res, next) => {
  var token = req.header('x-auth');

  User.findByToken(token)
    .then(user => {
      if (!user) {
        // res.status(401).send();
        Promise.reject();
      }

      req.user = user;
      req.token = token;
      next();
    })
    .catch(err => res.status(401).send());
};

module.exports = { authenticate };
