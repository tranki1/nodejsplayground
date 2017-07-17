const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(44, 11);
  if (res !== 55) {
    throw new Error(`expect 55 but got ${res}`);
  }
});

it('should square', () => {
  var res = utils.square(3);
  if (res !== 9) {
    throw new Error(`expect 9 but got ${res}`);
  }
});
