import React from 'react';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseItemQuantity,
  getCurrentQuantitiyById,
  increaseItemQuantity,
} from './cartSlice';

export default function UpdatePizzaQuantity({ pizzaId }) {
  const currentQuantity = useSelector(getCurrentQuantitiyById(pizzaId));
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
        type="round"
      >
        -
      </Button>
      {currentQuantity}
      <Button
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        type="round"
      >
        +
      </Button>
    </div>
  );
}
