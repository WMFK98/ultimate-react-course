import Item from "./Item";
import { useState } from "react";
export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onDeleteAll,
}) {
  const [selectSort, setSelectSort] = useState("input");
  let sortItem = [...items];
  if (selectSort === "description")
    sortItem.sort((a, b) => a.description.localeCompare(b.description));
  if (selectSort === "packed") sortItem.sort((a, b) => +a.packed - +b.packed);

  return (
    <div className="list ">
      <ul className="overflow-hidden">
        {sortItem.map((item) => (
          <Item
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
            key={item.id}
            item={item}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          value={selectSort}
          onChange={(e) => setSelectSort(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description </option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onDeleteAll}>clear list</button>
      </div>
    </div>
  );
}
