import { useState } from 'react';
import './../index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home.jsx';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart.jsx';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder.jsx';
import Order, { loader as orderLoader } from './features/order/Order.jsx';
import AppLayout from './ui/AppLayout.jsx';
import Error from './ui/Error.jsx';
import { action as updateOrderAction } from './features/order/UpdatePriority.jsx';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { element: <Home />, path: '/' },
      {
        element: <Menu />,
        path: '/menu',
        loader: menuLoader,
        errorElement: <Error />,
      },
      { element: <Cart />, path: '/cart' },
      {
        element: <CreateOrder />,
        path: '/order/new',
        action: createOrderAction,
      },
      {
        element: <Order />,
        path: '/order/:orderId',
        loader: orderLoader,
        action: updateOrderAction,
        errorElement: <Error />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
