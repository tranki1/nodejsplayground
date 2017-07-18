const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call spy correctly', () => {
    var spy = expect.createSpy();
    spy('Kim', 27);
    expect(spy).toHaveBeenCalledWith('Kim', 27);
  });

  it('should call saveUser w user obj correctly', () => {
    var email = 'kim@gmail.com';
    var password = '12asd';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});
