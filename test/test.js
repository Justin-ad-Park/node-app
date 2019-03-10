var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
	it('respond with hello world v0.2', function(done) {

		//navigate to root and check the response is "hello world"
		request(app).get('/').expect('hello world v0.2', done);
	});
});
