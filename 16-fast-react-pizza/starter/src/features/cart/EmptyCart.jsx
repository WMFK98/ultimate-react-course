import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="space-y-10 p-3">
      <LinkButton to={'/menu'}> &larr; Back to menu</LinkButton>

      <p className="text-center text-xl font-bold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
