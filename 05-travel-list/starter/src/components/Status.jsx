export default function Status({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some itmes to your packing list</em>
      </footer>
    );

  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percetage = Math.round((numPacked / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percetage === 100
          ? "You got everthing! Ready to go ✈️"
          : `   You have ${numItem} itme on your list and you already packed ${numPacked} (${percetage}%)`}
      </em>
    </footer>
  );
}
