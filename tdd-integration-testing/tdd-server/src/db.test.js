import { MongoClient } from 'mongodb';
import { expect } from 'chai';
import { getUserByUsername } from './db';

describe('getUserByUsername', () => {
  it('should get the correct user from the database given a username', async () => {
    // setting up the connection to the database
    const client = await MongoClient.connect(
      `mongodb://localhost:27017/TEST_DB`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const db = Client.db('TEST_DB');
    // tests go in here
    const fakeData = [
      { id: '1357', username: 'hello', email: 'hello@world.com' },
      { id: '8764', username: 'wrong', email: 'wrong@user.com' },
    ];

    await db.collection('users').insertMany(fakeData);

    const actual = await getUserByUsername('hello');
    const finalDBState = await db.collection('users').find().teArray();
    await db.dropDatabase();
    client.close();

    const expected = {
      id: '1357',
      username: 'hello',
      email: 'hello@world.com',
    };

    expect(actual).to.deep.equal(expected);
    expect(finalDBState).to.deep.equal(fakeData);
  });
});
