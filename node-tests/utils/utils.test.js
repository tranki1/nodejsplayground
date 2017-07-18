const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
  let res = utils.add(44, 11);
  // if (res !== 55) {
  //   throw new Error(`expect 55 but got ${res}`);
  // }

  expect(res)
    .toBe(55)
    .toBeA('number');
});

it('should async add to number', done => {
  utils.asyncAdd(4, 3, sum => {
    expect(sum)
      .toBe(7)
      .toBeA('number');
    done();
  });
});

it('should async square a number', done => {
  utils.asyncSquare(4, sum => {
    expect(sum)
      .toBe(16)
      .toBeA('number');
    done();
  });
});

it('should square', () => {
  let res = utils.square(3);
  // if (res !== 9) {
  //   throw new Error(`expect 9 but got ${res}`);
  // }

  expect(res).toBe(9);
});

it('should set firstname and lastname', () => {
  let user = { location: 'vietnam', age: 27 };
  let res = utils.setName(user, 'Kim Tran');
  expect(res).toEqual(user);
  expect(res).toInclude({
    firstname: 'Kim',
    lastname: 'Tran'
  });
});

it('should expect some value', () => {
  // expect(12).toNotBe(12);
  // expect({ name: 'Kim' }).toEqual({ name: 'Kim' });
  expect([2, 3, 4]).toExclude(1);
  expect([2, 3, 4]).toInclude(2);
});
