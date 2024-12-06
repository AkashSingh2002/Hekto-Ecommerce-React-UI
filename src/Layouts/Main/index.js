import React, { createContext, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../Pages/HomePage";
import Header from "../Header";
import Footer from "../Footer";
import { NewArrivals, BestSeller, SpecialOffer, Featured } from '../../Components/HomeNested';
import ShopGrid from "../../Pages/ShopGrid";

const GetProducts = createContext();

function Main() {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    const url = "https://my-json-server.typicode.com/pkboss6591/fake-server/products";

    return fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!products) return null;

  return (
    <>
      <Header />
      <GetProducts.Provider value={products}>
        <Routes>
          <Route path="/home" element={<Home />}>
            {/* Nested Routes are now handled differently */}
            <Route path="arrivals" element={<NewArrivals />} />
            <Route path="bestSeller" element={<BestSeller />} />
            <Route path="featured" element={<Featured />} />
            <Route path="specialOffer" element={<SpecialOffer />} />
          </Route>
          <Route path="/shopGrid" element={<ShopGrid />} />
          {/* Redirect any unmatched routes to /home */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </GetProducts.Provider>
      <Footer />
    </>
  );
}

export default Main;
export { GetProducts };
