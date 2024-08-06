import React from "react";
import { useSearchParams } from "react-router-dom";

export default function useUrlPostion() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return [lat, lng];
}
