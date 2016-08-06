var request = require('supertest');
var app = require('../index.js');
 
describe('GET /', function() {
  it('respond with hello world', function(done) {
    request(app).get('/').expect('Strider/Nodejs Demo', done);
  });
});

describe('GET /user', function(){
  it('respond with json', function(done){
    request(app).get('/user')
                .set('Accept', 'application/json')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect(200, done);
  });
});
