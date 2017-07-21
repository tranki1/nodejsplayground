const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
};

var token = jwt.sign(data, '123342');
console.log(token);

var decoded = jwt.verify(token, '123342');
console.log('decoded:' + decoded);
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
