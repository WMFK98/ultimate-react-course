import React from "react";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import CountryItem from "./CountryItem";

export default function CountryList({ isLoading, cities }) {
  if (isLoading) return <Spinner />;
  const counties = cities.reduce((cur, { country, emoji }) => {
    if (cur.some((curCountry) => curCountry.country === country)) return cur;
    return [...cur, { country, emoji }];
  }, []);
  if (!cities.length)
    return (
      <Message
        message={"Add your first city by clicking on a city on the map"}
      />
    );
  return (
    <ul className={styles.countryList}>
      {counties.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}
