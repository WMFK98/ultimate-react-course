import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Socks", quantity: 12, packed: false },
  { id: 4, description: "Socks", quantity: 12, packed: false },
  { id: 5, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="h-screen">
      <Logo />
      <Form />
      <PackingLinst />
      <Status />
    </div>
  );
}

function Logo() {
  return <h1>Far Away💀</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, package: false, id: Date.now() };
    console.log(newItem);
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

function PackingLinst() {
  return (
    <div className="list ">
      <ul className="overflow-hidden">
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
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
