import React, { createContext, useEffect, useState } from "react";
import Home from "../../Pages/HomePage";
import Header from "../Header";
import Footer from "../Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import {NewArrivals, BestSeller, SpecialOffer, Featured} from '../../Components/HomeNested'
import ShopGrid from "../../Pages/ShopGrid";

const GetProducts = createContext();

function Main() {

  const [products, setProducts] = useState([]);

  const fetchData = () => {

    const url = "https://my-json-server.typicode.com/pkboss6591/fake-server/products" //modified from local host


    return fetch(url)
          .then((response) => response.json())
          .then((data) => setProducts(data));
  }

  useEffect(() => {
    fetchData();
  },[]);

  if (!products) return null;

  return (
    <>
      <Header />
      <GetProducts.Provider value={products}>
        <Switch>
          <Route path="/home" component={Home}>
            <Route path="arrivals" element={<NewArrivals />} />
            <Route path="bestSeller" element={<BestSeller />} />
            <Route path="featured" element={<Featured />} />
            <Route path="specialOffer" element={<SpecialOffer />} />
          </Route>
          <Route path="/shopGrid" component={ShopGrid} />
          <Redirect to="/home" />
        </Switch>
        </GetProducts.Provider>
        <Footer />
    </>
  )
}

export default Main
export {GetProducts}