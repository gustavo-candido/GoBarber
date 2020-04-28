import 'reflect-metadata';

import express from 'express';
import routes from './routes';

import './database';

const app = express();
app.use(express.json());

app.use(routes);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server running at 3000');
});
