var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://localhost:27017/TodoApp',
  { useNewUrlParser: true }
);

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

var newTodo = new Todo({
  text: 'Cook dinner'
});

newTodo.save().then(
  doc => {
    console.log('Save todo', doc);
  },
  err => {
    console.log('Unable to save todo');
  }
);

var otherTodo = new Todo({
  text: 'Eating sugar',
  completed: true,
  completeAt: 123
});

otherTodo.save().then(
  doc => {
    console.log(JSON.stringify(doc, undefined, 2));
  },
  err => console.log('Unable to save other todo')
);
