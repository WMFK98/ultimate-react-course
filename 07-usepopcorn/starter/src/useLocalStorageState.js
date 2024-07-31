import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, keyStore) {
  const [value, setValue] = useState(
    () => JSON.parse(localStorage.getItem(keyStore)) ?? initialState
  );

  useEffect(() => {
    localStorage.setItem(keyStore, JSON.stringify(value));
  }, [value, keyStore]);

  return [value, setValue];
}
