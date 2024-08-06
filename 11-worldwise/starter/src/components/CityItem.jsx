import React from "react";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import Spinner from "./Spinner";
export default function CityItem({ city }) {
  const {
    cityName,
    emoji,
    date,
    id,
    position: { lat, lng },
  } = city;
  const { currentCity, deleteCity, isLoading } = useCities();
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));

  async function handleDeleteCity(id) {
    deleteCity(id);
  }

  if (isLoading) return <Spinner />;

  return (
    <li>
      <div
        className={`${styles.cityItem} ${
          currentCity.id === id && styles["cityItem--active"]
        }`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <span className={styles.name}>{cityName}</span>
        <time className={styles.date}>{formatDate(date)}</time>
        <button
          onClick={() => handleDeleteCity(city.id)}
          className={styles.deleteBtn}
        >
          &times;
        </button>
      </div>
    </li>
  );
}
