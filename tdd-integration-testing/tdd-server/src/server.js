import express from 'express';
import db from './db';

const app = express();

app.get('/users/:username', async (req, res) => {
  const { username } = req.params;
  const user = await db.getUserByUsername(username);
  res.json(user);
});

export { app };
