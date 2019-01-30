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

describe('/POST party', function () {
  var correctDetails = {
    name: 'party name',
    path: 'logo.jpg'
  };
  var wrongDetails = {
    name: 'party name'
  };

  it('it should be able to POST a party', function (done) {
    _chai2.default.request(_app2.default).post('/api/v1/parties').send(correctDetails).end(function (request, response) {
      response.body.statusMessage.should.equal('Party created successfully');
      response.should.have.status(201);
      done();
    });
  });

  it('should not post a Party with a missing field', function (done) {
    _chai2.default.request(_app2.default).post('/api/v1/parties').send(wrongDetails).end(function (request, response) {
      response.body.statusMessage.should.equal('All fields are required');
      response.should.have.status(400);
      done();
    });
  });
});

describe('/GET parties', function () {
  it('it should be able GET all parties', function (done) {
    _chai2.default.request(_app2.default).get('/api/v1/parties').end(function (request, response) {
      response.should.have.status(200);
      response.body.should.be.a('object');
      done();
    });
  });
});

describe('/GET/:partyId party', function () {
  var validParty = {
    id: 1,
    name: 'party name',
    logoUrl: 'chi.jpg'
  };
  var invalidParty = {
    name: 'party name',
    logoUrl: 'chi.jpg'
  };

  it('it should be able GET a party', function (done) {
    _chai2.default.request(_app2.default).get('/api/v1/parties/' + validParty.id).end(function (request, response) {
      response.should.have.status(200);
      done();
    });
  });

  it('should only return a valid party', function (done) {
    _chai2.default.request(_app2.default).get('/api/v1/parties/' + invalidParty.id).end(function (request, response) {
      response.should.have.status(404);
      response.body.statusMessage.should.equal('Party does not exist');
      done();
    });
  });
});

describe('/PATCH a Party', function () {
  var validParty = {
    id: 1,
    name: 'calix'
  };
  var editedvalidParty = {
    id: validParty.id,
    name: validParty.name + 'cgh'
  };

  it('should be able to edit a parties name', function (done) {
    _chai2.default.request(_app2.default).patch('/api/v1/parties/' + validParty.id + '/' + validParty.name).send(editedvalidParty).end(function (request, response) {
      response.should.have.status(200);
      response.body.statusMessage.should.equal('Party updated successfully');
      done();
    });
  });

  //   const nonEmptyPartyField = {
  //     id: validParty.id,
  //     name: 'a',
  //   };

  //   it('should fail if name is updated to empty field', (done) => {
  //     chai.request(server)
  //       .patch(`/api/v1/parties/${validParty.id}/${nonEmptyPartyField.name}`)
  //       .send(nonEmptyPartyField)
  //       .end((request, response) => {
  //         response.should.have.status(400);
  //         response.body.statusMessage.should.equal('Name field is required');
  //         done();
  //       });
  //   });
});

describe('/Delete party', function () {
  var deleteParty = {
    id: 1,
    name: 'calix'
  };
  it('should delete a party', function (done) {
    _chai2.default.request(_app2.default).delete('/api/v1/parties/' + deleteParty.id).end(function (request, response) {
      response.should.have.status(200);
      response.body.statusMessage.should.equal('party deleted');
      done();
    });
  });
});
//# sourceMappingURL=partyTests.js.map