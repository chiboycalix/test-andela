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

describe('/POST office', function () {
  var correctDetails = {
    type: 'logo.jpg',
    name: 'office name'
  };
  var wrongDetails = {
    name: 'party name'
  };

  it('it should be able to POST a party with all fields being entered', function (done) {
    _chai2.default.request(_app2.default).post('/api/v1/offices').send(correctDetails).end(function (request, response) {
      response.body.statusMessage.should.equal('Office created successfully');
      response.should.have.status(201);
      done();
    });
  });

  it('should not post an Office with a missing field', function (done) {
    _chai2.default.request(_app2.default).post('/api/v1/offices').send(wrongDetails).end(function (request, response) {
      response.body.statusMessage.should.equal('All fields are required');
      response.should.have.status(400);
      done();
    });
  });
});

describe('/GET offices', function () {
  it('it should be able GET all offices', function (done) {
    _chai2.default.request(_app2.default).get('/api/v1/offices').end(function (request, response) {
      response.should.have.status(200);
      response.body.should.be.a('object');
      done();
    });
  });
});

describe('/GET/:officeId office', function () {
  var validOffice = {
    id: 1,
    name: 'party name',
    type: 'chi.jpg'
  };
  var invalidOffice = {
    name: 'party name',
    type: 'chi.jpg'
  };

  it('it should be able GET a party', function (done) {
    _chai2.default.request(_app2.default).get('/api/v1/offices/' + validOffice.id).end(function (request, response) {
      response.should.have.status(200);
      response.body.statusMessage.should.equal('success');
      done();
    });
  });

  it('should only return a valid party', function (done) {
    _chai2.default.request(_app2.default).get('/api/v1/offices/' + invalidOffice.id).end(function (request, response) {
      response.should.have.status(404);
      response.body.statusMessage.should.equal('Office does not exist');
      done();
    });
  });
});
//# sourceMappingURL=officeTests.js.map