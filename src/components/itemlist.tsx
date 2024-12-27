import { useState } from "react";

interface Item {
  id: number;
  name: string;
}

interface ItemListProps {
  items: Item[];
  onUpdateItem: (id: number, newName: string) => void;
  onDeleteItem: (id: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onUpdateItem, onDeleteItem }) => {
  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");

  const handleEdit = (id: number, currentName: string) => {
    setEditId(id);
    setEditName(currentName);
  };

  const handleUpdate = () => {
    if (editId !== null && editName.trim()) {
      onUpdateItem(editId, editName);
      setEditId(null);
      setEditName("");
    }
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className="flex items-center mb-2">
          {editId === item.id ? (
            <>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="border p-2 mr-2"
              />
              <button onClick={handleUpdate} className="bg-green-500 text-white px-4 py-2 mr-2">
                Salvar
              </button>
              <button onClick={() => setEditId(null)} className="bg-gray-500 text-white px-4 py-2">
                Cancelar
              </button>
            </>
          ) : (
            <>
              <span className="flex-1">{item.name}</span>
              <button
                onClick={() => handleEdit(item.id, item.name)}
                className="bg-yellow-500 text-white px-4 py-2 mr-2"
              >
                Editar
              </button>
              <button
                onClick={() => onDeleteItem(item.id)}
                className="bg-red-500 text-white px-4 py-2"
              >
                Excluir
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
