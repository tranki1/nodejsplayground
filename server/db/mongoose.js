var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose
  .connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp',
    { useNewUrlParser: true }
  )
  .then(
    () => {
      console.log('Database connected');
    },
    err => {
      /** handle initial connection error */
      console.log('Error in database connection. ', err);
    }
  );

module.exports = { mongoose };
