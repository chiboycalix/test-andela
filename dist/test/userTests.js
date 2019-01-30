'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-unused-vars
var should = _chai2.default.should();

_chai2.default.use(_chaiHttp2.default);

// describe('Demo test', () => {
//   it('This is demo test and actually tests nothing', () => {
//     ('one').should.equal('one');
//   });
// });

describe('Login tests', function () {
  var correctUserDetails = {
    firstName: 'nonso',
    lastName: 'calix'
  };

  var wrongUserDetails = {
    firstName: 'meeky',
    lastName: 'shyboy'
  };

  it('It should successfully login a user when all inputs are correct', function (done) {
    _chai2.default.request(_app2.default).post('/api/v1/auth/login').send(correctUserDetails).end(function (request, response) {
      response.body.statusMessage.should.equal('login successful');
      response.statusCode.should.equal(200);
      done();
    });
  });

  it('It should not log a user in if any field is left empty', function (done) {
    _chai2.default.request(_app2.default).post('/api/v1/auth/login').send(wrongUserDetails).end(function (request, response) {
      response.body.statusMessage.should.equal('user not found');
      response.statusCode.should.equal(404);
      response.body.should.have.property('statusMessage');
      response.body.should.be.a('object');
      response.should.have.status(404);
      done();
    });
  });
});

describe('Signup Tests', function () {
  var correctDetails = {
    email: 'igwechinonso@gmail.com',
    password: '123456',
    passportUrl: 'server\\uploads\\1548808436079-images.jpeg'
  };
  var wrongDetails = {
    email: 'calix'
  };

  var conflictDetails = {
    email: correctDetails.email,
    password: '1234',
    passportUrl: 'kdhkshdkhd.png'
  };

  it('should successfully create a new User', function (done) {
    _chai2.default.request(_app2.default).post('/api/v1/auth/signup').send(correctDetails).end(function (request, response) {
      response.body.statusMessage.should.equal('Account created successfully');
      response.should.have.status(201);
      done();
    });
  });

  it('should not create a user with missing email or password field', function (done) {
    _chai2.default.request(_app2.default).post('/api/v1/auth/signup').send(wrongDetails).end(function (request, response) {
      response.body.statusMessage.should.equal('All fields are required');
      response.should.have.status(400);
      done();
    });
  });

  it('should not create a new user with an already existing mail', function (done) {
    _chai2.default.request(_app2.default).post('/api/v1/auth/signup').send(conflictDetails).end(function (request, response) {
      response.body.statusMessage.should.equal('Email already exists');
      response.should.have.status(409);
      done();
    });
  });
});
//# sourceMappingURL=userTests.js.map