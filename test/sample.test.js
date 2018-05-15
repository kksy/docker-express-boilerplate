const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const server = require('../index');

chai.use(chaiHttp)

describe('GET /', () => {
  it('it sends welcome message', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello World! This is your first app');
        done();
      });
  });
});
