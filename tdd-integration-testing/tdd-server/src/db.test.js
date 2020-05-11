import { expect } from 'chai';
import { getUserByUsername } from './db';
import { getDatabaseData, setDatabaseData, restDatabase } from './test-helpers';

describe('getUserByUsername', () => {
  afterEach('reset the database', async () => {
    await restDatabase();
  });

  it('should get the correct user from the database given a username', async () => {
    // tests go in here
    const fakeData = [
      { id: '1357', username: 'hello', email: 'hello@world.com' },
      { id: '8764', username: 'wrong', email: 'wrong@user.com' },
    ];

    await setDatabaseData('users', fakeData);

    const actual = await getUserByUsername('hello');
    const finalDBState = await getDatabaseData('users');

    const expected = {
      id: '1357',
      username: 'hello',
      email: 'hello@world.com',
    };

    expect(actual).excludingEvery('_id').to.deep.equal(expected);
    expect(finalDBState).excludingEvery('_id').to.deep.equal(fakeData);
  });
});
