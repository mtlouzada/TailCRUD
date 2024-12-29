import React, { useState, useEffect } from "react";

const API_URL = "http://localhost:5000/api/items";

interface Item {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState("");

  const fetchItems = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setItems(data);
  };

  const addItem = async () => {
    if (!newItem) return;
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newItem }),
    });
    const item = await response.json();
    setItems((prev) => [...prev, item]);
    setNewItem("");
  };

  const deleteItem = async (id: number) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">CRUD Simples</h1>

        <div className="flex mb-4">
          <input
            type="text"
            className="border border-gray-300 rounded-l px-3 py-2 w-full"
            placeholder="Novo item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
            onClick={addItem}
          >
            Adicionar
          </button>
        </div>

        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border p-2 rounded"
            >
              <span>{item.name}</span>
              <button
                className="text-red-500 hover:underline"
                onClick={() => deleteItem(item.id)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
