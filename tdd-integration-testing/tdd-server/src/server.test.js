import sinon from 'sinon';
import request from 'supertest';
import { expect } from 'chai';
import db from './db';

describe('GET /user/:username', () => {
  it('should send the correct response when a user with the correct username is found', async () => {
    //setup some fake data to use
    const fakeData = {
      id: '1357',
      username: 'hello',
      email: 'hello@world.com',
    };

    //create a STUB with sinon
    const stub = sinon.stub(db, 'getUserByUsername').resolves(fakeData);

    // always remember to call the stub in our tests
    stub.restore();
  });
});
