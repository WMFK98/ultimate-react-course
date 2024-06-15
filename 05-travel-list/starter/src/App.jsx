import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Status from "./components/Status";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
  ]);
  function handleDelete(itemId) {
    setItems((items) => items.filter((item) => item.id !== itemId));
  }
  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) => {
        return item.id === id ? { ...item, packed: !item.packed } : item;
      })
    );
  }

  function handleDeleteAll() {
    setItems([]);
  }
  return (
    <div className="h-screen">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        onDeleteAll={handleDeleteAll}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDelete}
        items={items}
      />
      <Status items={items} />
    </div>
  );
}
