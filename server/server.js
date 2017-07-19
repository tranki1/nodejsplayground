var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://localhost:27017/TodoApp',
  { useNewUrlParser: true }
);

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var newTodo = new Todo({
  text: '    Edit this video    '
});

newTodo.save().then(
  doc => {
    console.log('Save todo', doc);
  },
  err => {
    console.log('Unable to save todo');
  }
);

// var otherTodo = new Todo({
//   text: 'Eating sugar',
//   completed: true,
//   completeAt: 123
// });

// otherTodo.save().then(
//   doc => {
//     console.log(JSON.stringify(doc, undefined, 2));
//   },
//   err => console.log('Unable to save other todo')
// );

var User = mongoose.model('User', {
  email: {
    required: true,
    trim: true,
    type: String,
    minlength: 1
  }
});

var newUser = new User({
  email: 'kimtran@gmail.com'
});

newUser.save().then(
  doc => {
    console.log(JSON.stringify(doc, undefined, 2));
  },
  e => {
    console.log(e);
  }
);
