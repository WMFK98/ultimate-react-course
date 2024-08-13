import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentQuantitiyById } from '../cart/cartSlice';
import DeleteItemButton from '../cart/DeleteItemButton';
import UpdatePizzaQuantity from '../cart/UpdatePizzaQuantity';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantitiyById(id));
  const isInCart = currentQuantity > 0;
  // console.log(currentQuantity);
  function handleOnClick() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <>
      <li className="flex justify-between gap-2 p-2">
        <img
          src={imageUrl}
          alt={name}
          className={`h-32 ${soldOut ? 'opacity-70 grayscale' : ''}`}
        />
        <div className="flex flex-auto flex-col justify-between">
          <div>
            <p className="font-bold">{name}</p>
            <p>{ingredients.join(', ')}</p>
            {currentQuantity}
          </div>
          <div>
            {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          </div>
        </div>
        <div className="mb-2 mt-auto flex h-12 gap-2">
          {isInCart && (
            <div className="flex gap-5">
              <UpdatePizzaQuantity pizzaId={id} />
              <DeleteItemButton pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button onClick={handleOnClick}>Add To Cart</Button>
          )}
        </div>
      </li>
      <hr />
    </>
  );
}

export default MenuItem;
