import express from 'express';
import routes from './router';
import { initializeDB } from './db';
import router from './router';

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Rotas
app.use('/api', routes);

// Inicializar o banco e iniciar o servidor
initializeDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});
