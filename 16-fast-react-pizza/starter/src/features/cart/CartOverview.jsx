import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="flex justify-between bg-black px-6 py-5 text-lg uppercase text-white">
      <p className="space-x-4">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart</Link>
    </div>
  );
}

export default CartOverview;
