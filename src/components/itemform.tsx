import { useState } from "react";

interface ItemFormProps {
  onAddItem: (name: string) => void;
}

const ItemForm: React.FC<ItemFormProps> = ({ onAddItem }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAddItem(name);
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Novo item"
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Adicionar
      </button>
    </form>
  );
};

export default ItemForm;
