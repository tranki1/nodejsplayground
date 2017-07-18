module.exports.add = (a, b) => a + b;

module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};

module.exports.asyncSquare = (a, callback) => {
  setTimeout(() => callback(a * a), 20);
};

module.exports.square = a => a * a;
module.exports.setName = (user, fullname) => {
  let name = fullname.split(' ');
  user.firstname = name[0];
  user.lastname = name[1];
  return user;
};
