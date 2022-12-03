import cors from 'cors';
import express from 'express';
import path from 'path';
import { conjugareRouter } from './controllers/conjugare';

const port = Number(process.env.SERVER_PORT) || 3001;

const app = express();
app.use(cors());

app.get('/', (_, res) => {
  res.json('👋 Howdy from the server :)');
});

app.use(express.static(path.join(__dirname, '../client/dist')));
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.use('/conjugare', conjugareRouter);

app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
});
