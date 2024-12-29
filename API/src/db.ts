import sqlite3 from 'sqlite3';
import { promisify } from 'util';

// Conexão com o banco de dados
export const connectDB = () => {
  return new sqlite3.Database('./database.sqlite');
};

// Inicializar o banco de dados
export const initializeDB = async () => {
  const db = connectDB();

  // Promisify as funções `run` e `exec`
  const run = promisify(db.run.bind(db));
  const exec = promisify(db.exec.bind(db));

  await exec(`
    CREATE TABLE IF NOT EXISTS items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    )
  `);

  console.log('Banco de dados inicializado com sucesso!');
  db.close(); // Fecha a conexão ao finalizar a inicialização
};
