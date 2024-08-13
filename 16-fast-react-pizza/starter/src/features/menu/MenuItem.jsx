import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  function handleOnClick() {}
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
          </div>
          <div>
            {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          </div>
        </div>
        <div className="mb-2 mt-auto flex h-12">
          {!soldOut && <Button onClick={handleOnClick}>Add To Cart</Button>}
        </div>
      </li>
      <hr />
    </>
  );
}

export default MenuItem;
