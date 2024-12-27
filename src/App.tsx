import { useState } from "react";
import ItemForm from "./components/itemform";
import ItemList from "./components/itemlist";

interface Item {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (name: string) => {
    const newItem: Item = { id: Date.now(), name };
    setItems([...items, newItem]);
  };

  const updateItem = (id: number, newName: string) => {
    setItems(items.map(item => (item.id === id ? { ...item, name: newName } : item)));
  };

  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">CRUD com Vite e TypeScript</h1>
      <ItemForm onAddItem={addItem} />
      <ItemList items={items} onUpdateItem={updateItem} onDeleteItem={deleteItem} />
    </div>
  );
};

export default App;
