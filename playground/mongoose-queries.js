const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// var id = '5ba00054775e6f4933de165';

// if (!ObjectID.isValid(id)) {
//   console.log('ID is not valid');
// }
// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('todo', todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log('id not found');
//     }
//     console.log('todo By Id', todo);
//   })
//   .catch(err => console.log(err));

var id = '5b9ff14238429dd766b426e7';
User.findById(id)
  .then(user => {
    if (!user) {
      console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
  })
  .catch(err => console.log(err));
