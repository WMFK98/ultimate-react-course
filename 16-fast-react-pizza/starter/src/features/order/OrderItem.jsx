import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <>
      <li className="flex justify-between">
        <div>
          <p>
            {quantity}&times; {name}
          </p>
          <p className="italic text-gray-500">
            {' '}
            {isLoadingIngredients ? 'loading...' : ingredients?.join(', ')}
          </p>
        </div>
        <p>{formatCurrency(totalPrice)}</p>
      </li>
      <hr />
    </>
  );
}

export default OrderItem;
