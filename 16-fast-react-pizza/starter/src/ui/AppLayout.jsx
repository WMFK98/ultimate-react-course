import React from 'react';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './loader';

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="max-w-screen flex h-screen flex-col justify-between bg-slate-100">
      {isLoading && <Loader />}
      <Header />
      <main className="flex-auto overflow-scroll">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}
