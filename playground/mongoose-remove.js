const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findOneAndRemove({}).then(result => {
//   console.log(result);
// });

Todo.findByIdAndRemove('5ba011e3ec20b6378db84b12').then(todo => {
  console.log(todo);
});
