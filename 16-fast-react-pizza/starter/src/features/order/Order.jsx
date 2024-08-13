// Test ID: IIDSAT

import { useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import OrderItem from './OrderItem';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';

// const order = {
//   id: "ABCDEF",
//   customer: "Jonas",
//   phone: "123456789",
//   address: "Arroios, Lisbon , Portugal",
//   priority: true,
//   estimatedDelivery: "2027-04-25T10:00:00",
//   cart: [
//     {
//       pizzaId: 7,
//       name: "Napoli",
//       quantity: 3,
//       unitPrice: 16,
//       totalPrice: 48,
//     },
//     {
//       pizzaId: 5,
//       name: "Diavola",
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },
//     {
//       pizzaId: 3,
//       name: "Romana",
//       quantity: 1,
//       unitPrice: 15,
//       totalPrice: 15,
//     },
//   ],
//   position: "-9.000,38.000",
//   orderPrice: 95,
//   priorityPrice: 19,
// };

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  return (
    <div className="flex h-full flex-col justify-between p-3 pt-10">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between uppercase">
          <h2 className="text-xl font-bold">Order #{id} status</h2>
          <div className="space-x-3 font-bold">
            {priority && (
              <span className="rounded-xl bg-red-600 px-3 py-1 text-white">
                Priority
              </span>
            )}
            <span className="rounded-xl bg-green-700 px-3 py-1 text-white">
              {status} order
            </span>
          </div>
        </div>

        <div className="flex justify-between bg-gray-200 px-4 py-7">
          <p className="font-bold">
            {deliveryIn >= 0
              ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
              : 'Order should have arrived'}
          </p>

          <p className="text-gray-400">
            (Estimated delivery: {formatDate(estimatedDelivery)})
          </p>
        </div>
      </div>

      <ul className="flex-auto space-y-5 px-2 py-3">
        {cart.map((order) => (
          <OrderItem key={order.id} item={order} />
        ))}
      </ul>

      <div className="bg-gray-200 px-4 py-7">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="text-lg font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
