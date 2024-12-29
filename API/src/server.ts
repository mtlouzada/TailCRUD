import express from 'express';
import routes from './router';
import { initializeDB } from './db';
import router from './router';

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/api', routes);

initializeDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});
