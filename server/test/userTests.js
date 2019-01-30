import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

// eslint-disable-next-line no-unused-vars
const should = chai.should();

chai.use(chaiHttp);

// describe('Demo test', () => {
//   it('This is demo test and actually tests nothing', () => {
//     ('one').should.equal('one');
//   });
// });

describe('Login tests', () => {
  const correctUserDetails = {
    firstName: 'nonso',
    lastName: 'calix',
  };

  const wrongUserDetails = {
    firstName: 'meeky',
    lastName: 'shyboy',
  };
  

  it('It should successfully login a user when all inputs are correct', (done) => {
    chai.request(server)
      .post('/api/v1/auth/login')
      .send(correctUserDetails)
      .end((request, response) => {
        response.body.statusMessage.should.equal('login successful');
        response.statusCode.should.equal(200);
        done();
      });
  });

  it('It should not log a user in if any field is left empty', (done) => {
    chai.request(server)
      .post('/api/v1/auth/login')
      .send(wrongUserDetails)
      .end((request, response) => {
        response.body.statusMessage.should.equal('user not found');
        response.statusCode.should.equal(404);
        response.body.should.have.property('statusMessage');
        response.body.should.be.a('object');
        response.should.have.status(404);
        done();
      });
  });
});

describe('Signup Tests', () => {
  const correctDetails = {
    email: 'igwechinonso@gmail.com',
    password: '123456',
    passportUrl: 'server\\uploads\\1548808436079-images.jpeg',
  };
  const wrongDetails = {
    email: 'calix',
  };

  const conflictDetails = {
    email: correctDetails.email,
    password: '1234',
    passportUrl: 'kdhkshdkhd.png',
  };


  it('should successfully create a new User', (done) => {
    chai.request(server)
      .post('/api/v1/auth/signup')
      .send(correctDetails)
      .end((request, response) => {
        response.body.statusMessage.should.equal('Account created successfully');
        response.should.have.status(201);
        done();
      });
  });

  it('should not create a user with missing email or password field', (done) => {
    chai.request(server)
      .post('/api/v1/auth/signup')
      .send(wrongDetails)
      .end((request, response) => {
        response.body.statusMessage.should.equal('All fields are required');
        response.should.have.status(400);
        done();
      });
  });

  it('should not create a new user with an already existing mail', (done) => {
    chai.request(server)
      .post('/api/v1/auth/signup')
      .send(conflictDetails)
      .end((request, response) => {
        response.body.statusMessage.should.equal('Email already exists');
        response.should.have.status(409);
        done();
      });
  });
});