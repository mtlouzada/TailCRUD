import express, { Request, Response } from 'express';
import { connectDB } from './db';

const router = express.Router();

// Define a interface para o corpo da requisição
interface ItemRequest {
  name: string;
}

router.get('/items', (req: Request, res: Response) => {
  const db = connectDB();
  db.all('SELECT * FROM items', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar itens' });
    }
    res.json(rows);
  });
});

router.post('/items', (req: Request<{}, {}, ItemRequest>, res: Response) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'O nome é obrigatório' });
  }

  const db = connectDB();
  db.run('INSERT INTO items (name) VALUES (?)', [name], function (err) {
    if (err) {
      return res.status(500).json({ error: 'Erro ao inserir item' });
    }
    const newItem = { id: this.lastID, name };
    res.status(201).json(newItem);
  });
});

router.delete('/items/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const db = connectDB();
  db.run('DELETE FROM items WHERE id = ?', [id], function (err) {
    if (err) {
      return res.status(500).json({ error: 'Erro ao deletar item' });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Item não encontrado' });
    }
    res.status(204).send();
  });
});

export default router;
