import React from "react"
import ProductDetails from "./pages/productDetails"
import SellersBoard from "./pages/sellersBoard"
import SellersStore from "./pages/sellersStore"
import Home from "./pages/Home"
import Checkout from "./pages/Checkout"
import Errorpage from "./pages/Errorpage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product-details" element={<ProductDetails />} />
        <Route path="sellers-board" element={<SellersBoard />} />
        <Route path="sellers-store" element={<SellersStore />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="errorpage" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  )
}
