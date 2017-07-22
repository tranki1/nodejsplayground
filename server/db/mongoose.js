var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true
    }
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
