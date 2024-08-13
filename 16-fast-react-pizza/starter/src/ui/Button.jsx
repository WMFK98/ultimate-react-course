import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  disabled,
  to,
  type = 'primary',
  onClick,
}) {
  const style = {
    primary:
      'rounded-3xl bg-yellow-400 p-3 font-bold uppercase transition-all duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed',
    secondary:
      'rounded-3xl text-gray-400 border border-gray-400 p-3 font-bold uppercase transition-all duration-300 hover:bg-gray-400 hover:text-black focus:outline-none focus:ring focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed',
    round:
      'rounded-[100%]  h-10 w-10 bg-yellow-400  font-bold uppercase transition-all duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed',
  };

  if (to)
    return (
      <button onClick={onClick} className={style[type]} disabled={disabled}>
        <Link to={to}>{children}</Link>
      </button>
    );

  return (
    <button onClick={onClick} className={style[type]} disabled={disabled}>
      {children}
    </button>
  );
}
