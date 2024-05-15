export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <div className="stats">Start adding some items to your packing list</div>
    );
  const calcList = items.length;
  const calcItems = items.filter((item) => item.packed).length;
  const calcListItems = Math.round((calcItems / calcList) * 100);
  return (
    <div className="stats">
      You have a {calcList} items on your list, and you already packed{" "}
      {calcItems} ({calcListItems}%)
    </div>
  );
}
