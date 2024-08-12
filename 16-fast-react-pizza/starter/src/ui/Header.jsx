import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/username';

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-yellow-400 px-3 py-5">
      <Link className="text-lg uppercase" to="/" children>
        Fast React Pizza co.
      </Link>
      <div className="flex items-center gap-3">
        <SearchOrder />
        <Username />
      </div>
    </header>
  );
}
