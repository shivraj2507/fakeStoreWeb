import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";

import Navbar from "./components/Navbar";

import Cart from "./components/Cart";

function App() {
  return (
    <div className="w-full">
      <div className="bg-slate-900 w-full overflow-hidden">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
