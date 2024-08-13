import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const username = useSelector((state) => state.user.username);
  const carts = fakeCart;

  return (
    <div className="space-y-10 p-3">
      <Link
        className="text-blue-500 hover:text-blue-600 hover:underline"
        to="/menu"
      >
        &larr; Back to menu
      </Link>

      <h2 className="text-lg font-bold">Your cart, {username}</h2>
      <ul className="space-y-5">
        {carts.map((cart) => (
          <CartItem item={cart} key={cart.pizzaId} />
        ))}
      </ul>

      <div className="space-x-4">
        <Button>
          <Link to="/order/new">Order pizzas</Link>
        </Button>
        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
