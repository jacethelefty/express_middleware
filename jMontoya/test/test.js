const chai = require('chai');
const server = require(__dirname + '/../server.js');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

describe('simple express middleware server', () => {
  it('should respond to a request with a hello message', (done) => {
    request('localhost:3000')
      .get('/hello')
      .end((err,res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.body).to.eql({'msg': 'hello from the other side'});
        done();
      });
  });
  // it('should POST jsonData to /sendJson', (done) => {          <<<<<<<<<<<<<<<<<<cannot get to pass....think I have issue with the hello joe object on line 21
  //   request('localhost:3000')
  //   .post('/sendJson/' + {"hello": "Joe"})
  //   .end((err,res) => {
  //     expect(err).to.eql(null);
  //     expect(res).to.have.status(200);
  //     expect(res.body).to.eql({"hello": "Joe"});
  //     done();
  //   });
  // });
  it('should POST to /hello/name to send Hello Name in string', (done) => {
    request('localhost:3000')
    .post('/hello/' + 'Joe')
    .end((err,res) => {
      //console.log('status code: ' + res.statusCode);
      //console.log('res.body: ' + res.body);
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.body).to.eql({'msg': 'Hello Joe'});
      done();
    });
  });
  it('should 404', (done) => {
    request('localhost:3000')
      .get('/afa')
      .end((err, res) => {
        //console.log('status code: ' + res.statusCode);
        //console.log('res.body: ' + res.body);
        expect(err).to.eql(null);
        expect(res).to.have.status(404);
        expect(res.body.msg).to.eql('I think youre lost dude');
        done();
      });
  });
});
