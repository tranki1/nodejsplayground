const request = require('supertest');
const expect = require('expect');
var app = require('./server');

describe('Server', () => {
  describe('GET /', () => {
    it('should return hello world response', done => {
      request(app)
        .get('/')
        .expect(404)
        .expect(res => {
          expect(res.body).toInclude({ error: 'page not found' });
        })
        .end(done);
    });
  });
  describe('GET /user', () => {
    it('should return users', done => {
      request(app)
        .get('/users')
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({
            name: 'Kim',
            age: 27
          });
        })
        .end(done);
    });
  });
});
