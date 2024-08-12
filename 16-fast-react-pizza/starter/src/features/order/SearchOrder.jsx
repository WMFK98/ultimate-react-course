import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input px-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Serach order #"
      ></input>
    </form>
  );
}
