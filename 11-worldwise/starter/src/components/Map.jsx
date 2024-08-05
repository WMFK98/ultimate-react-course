import React, { useEffect, useState } from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useCities } from "../contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";
export default function Map() {
  const { cities } = useCities();
  const [mapPostion, setMapPostion] = useState([40, 0]);
  const {
    isLoading: isLoadingPosition,
    position: geolocationPostion,
    getPosition,
  } = useGeolocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  useEffect(() => {
    if (mapLat && mapLng) setMapPostion([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geolocationPostion)
      setMapPostion([geolocationPostion.lat, geolocationPostion.lng]);
  }, [geolocationPostion]);

  return (
    <div className={styles.mapContainer}>
      {!geolocationPostion && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : "Use your postion"}
        </Button>
      )}
      <MapContainer
        className={styles.map}
        center={mapPostion}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map(({ position: { lat, lng } }, id, emoji) => {
          return (
            <Marker position={[lat, lng]} key={id}>
              <Popup>
                <span></span>
              </Popup>
            </Marker>
          );
        })}
        <ChangeCenter position={mapPostion} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });

  return;
}
