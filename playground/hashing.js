const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

var hashPassword =
  '$2a$10$.shpEkSe1uYQMI1wX8KTQ.on1Ut5wZk4xpdInkePYMCtKa03wYi4m';

bcrypt.compare(password, hashPassword, (err, res) => {
  console.log(res);
});

// var data = {
//   id: 10
// };

// var token = jwt.sign(data, '123342');
// console.log(token);

// var decoded = jwt.verify(token, '123342');
// console.log('decoded:' + decoded);
// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log('message:' + message);
// console.log('hash:' + hash);

// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somessecrete').toString()
// };

// var resultHash = SHA256(JSON.stringify(token.data) + 'somessecrete').toString();

// if (resultHash === token.hash) {
//   console.log('user not change');
// } else {
//   console.log('data change do not trust');
// }
