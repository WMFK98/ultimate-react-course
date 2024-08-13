import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
import { getTotalCartPrice, getTotalQuantity } from './cartSlice';

function CartOverview() {
  const totaCartlPrice = useSelector(getTotalCartPrice);

  const totalyCartQuantity = useSelector(getTotalQuantity);

  if (!totalyCartQuantity) return null;
  return (
    <div className="flex justify-between bg-black px-6 py-5 text-lg uppercase text-white">
      <p className="space-x-4">
        <span>{totalyCartQuantity} pizzas</span>
        <span>{formatCurrency(totaCartlPrice)}</span>
      </p>
      <Link to="/cart">Open cart</Link>
    </div>
  );
}

export default CartOverview;
