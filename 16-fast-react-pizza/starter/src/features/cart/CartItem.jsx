import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <>
      <li className="flex items-center justify-between">
        <p>
          {quantity}&times; {name}
        </p>
        <div className="flex items-center gap-5">
          <p>{formatCurrency(totalPrice)}</p>
          <Button>Delete</Button>
        </div>
      </li>
      <hr />
    </>
  );
}

export default CartItem;
