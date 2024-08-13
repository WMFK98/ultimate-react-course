import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import DeleteItemButton from './DeleteItemButton';
import UpdatePizzaQuantity from './UpdatePizzaQuantity';

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
          <UpdatePizzaQuantity pizzaId={pizzaId} />
          <DeleteItemButton pizzaId={pizzaId} />
        </div>
      </li>
      <hr />
    </>
  );
}

export default CartItem;
