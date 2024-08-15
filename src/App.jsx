import React, { useEffect } from "react";
import "./App.css";
import Cart from "./Components/Cart";
import Footers from "./Pages/Footers";
import { ProducteData } from "./ProducteData/ProducteData";
import { useDispatch } from "react-redux";
import { setProducts } from "./Redux/CartSlice";
import Navbare from "./Pages/Navbar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(ProducteData));
  }, [dispatch]);

  return (
    <>
      <Navbare />
      <Cart />
      <Footers />
    </>
  );
}

export default App;
