import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import CityList from "./components/CityList";
// import CountryList from "./components/C";
import "./index.css";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
const BASE_URL = "http://localhost:9000/cities";

export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      (async () => {
        setIsLoading(true);
        const res = await fetch(BASE_URL);
        const data = await res.json();
        setCities(data);
      })();
    } catch {
      alert("error");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route index element={<Homepage />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:id" element={<City />} />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="pricing" element={<p>Pricing</p>}></Route>
          <Route path="form" element={<Form />}></Route>
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
