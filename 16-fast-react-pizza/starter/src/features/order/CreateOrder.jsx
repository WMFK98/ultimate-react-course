import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import { useSelector } from 'react-redux';
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';
import store from '../../store';
import { formatCurrency } from '../../utils/helpers';
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function CreateOrder() {
  const username = useSelector((state) => state.user.username);
  const [withPriority, setWithPriority] = useState(false);
  const formErrors = useActionData();
  const cart = useSelector(getCart);
  const isSubmitting = useNavigation().state === 'submitting';
  const totalPrice = useSelector(getTotalCartPrice);
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="space-y-5 p-3">
      <h2 className="text-lg font-bold">Ready to order? Let's go!</h2>

      <Form method="POST" className="flex flex-col gap-2 px-3">
        <div className="flex items-center">
          <label className="w-[150px]">First Name</label>
          <input
            defaultValue={username}
            className="input"
            type="text"
            name="customer"
            required
          />
        </div>

        <div className="flex items-center">
          <label className="w-[150px]">Phone number</label>
          <div className="w-full space-y-2">
            <input className="input" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="rounded-2xl bg-red-100 px-4 py-2 text-red-600">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center">
          <label className="w-[150px]">Address</label>
          <input className="input" type="text" name="address" required />
        </div>

        <div className="space-x-2">
          <input
            className="focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-0"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <input type="hidden" value={JSON.stringify(cart)} name="cart" />

        <div>
          <Button disabled={isSubmitting}>
            {isSubmitting
              ? 'Placing Order'
              : `Order now from ${withPriority ? formatCurrency(totalPrice * 1.2) : formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };
  const errors = {};

  if (!isValidPhone(order.phone)) errors.phone = 'The phone is wrong';
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
