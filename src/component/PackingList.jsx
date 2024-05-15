import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItem,
}) {
  const [sortedBy, setSortedBy] = useState("input");
  let sortedItems;

  if (sortedBy === "input") {
    sortedItems = items;
  }

  if (sortedBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortedBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          ></Item>
        ))}
      </ul>
      <div className="actions">
        <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
          <option value={"input"}>SORT BY INPUT ORDER</option>
          <option value={"description"}>SORT BY DESCRIPTION</option>
          <option value={"packed"}>SORT BY PACKED STATUS</option>
        </select>
        <button onClick={() => onClearItem()}>Clear List Item</button>
      </div>
    </div>
  );
}
