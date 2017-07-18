var db = require('./db');

module.exports.handleSignup = (email, password) => {
  //Check if the email already exist
  //save user to the database
  db.saveUser({
    email,
    password
  });
  //send the welcome email
};
