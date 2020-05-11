import sinon from 'sinon';
import request from 'supertest';
import { expect } from 'chai';
import db from './db';
import { app } from './server';

// integration test for a server endpoint.
describe('GET /users/:username', () => {
  it('should send the correct response when a user with the correct username is found', async () => {
    //setup some fake data to use
    const fakeData = {
      id: '1357',
      username: 'hello',
      email: 'hello@world.com',
    };

    const stub = sinon.stub(db, 'getUserByUsername').resolves(fakeData);
    // using supertest to test server endpoints.
    await request(app)
      .get('/users/hello')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(fakeData);
    // check to see if your stub was called
    expect(stub.getCall(0).args[0]).to.equal('hello');

    // always remember to call the stub in our tests
    stub.restore(); // returns method to original state before any other tests are run.
  });
});
