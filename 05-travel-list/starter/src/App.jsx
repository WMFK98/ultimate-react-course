import { useState } from "react";

export default function App() {
  const [items, setItems] = useState(
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false }
  );
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
  return (
    <div className="h-screen">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingLinst
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDelete}
        items={items}
      />
      <Status />
    </div>
  );
}

function Logo() {
  return <h1>Far Away💀</h1>;
}

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form ">
      <h3 className="">What do you need for your 😆</h3>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>ADD</button>
    </form>
  );
}

function PackingLinst({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list ">
      <ul className="overflow-hidden">
        {items.map((item) => (
          <Item
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
            key={item.id}
            item={item}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" onChange={() => onToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Status() {
  return (
    <footer className="stats">
      <em>You have X itme on your list and you already packed X (X%) </em>
    </footer>
  );
}
