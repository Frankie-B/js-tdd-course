import { MongoClient } from 'mongodb';

export const getUserByUsername = async (username) => {
  const client = await MongoClient.connect(
    `mongodb://localhost:27017/TEST_DB`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  const db = client.db('TEST_DB');

  const result = await db.collection('users').findOne({ username });

  client.close();

  return result;
};
