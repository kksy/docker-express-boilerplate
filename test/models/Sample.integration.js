'use strict'

const expect = require('chai').expect;
const client = require('mongodb').MongoClient;
const Sample = require('../../src/models/Sample');

describe('Sample', () => {
  it('all', async () => {
    const allItems = await Sample.all();
    expect(allItems.length).to.equal(1);
    expect(allItems[0].message).to.equal('Hello world');
    expect(allItems[0].status).to.equal('UNREAD');
  });
});
