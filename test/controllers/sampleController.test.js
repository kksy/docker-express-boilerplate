'use strict'

const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const Sample = require('../../src/models/Sample');
const sampleController = sinon.stub(Sample, 'all').returns([]);
const server = require('../../server');

chai.use(chaiHttp);

describe('sampleController', () => {
  describe('GET /api/sample', () => {
    it('gets sample data', (done) => {
      chai.request(server)
        .get('/api/sample')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(Object.keys(res.body)).to.contain('data');
          done();
        });
    });
  });
});
