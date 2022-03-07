import React from "react"
import ProductDetails from "./pages/productDetails"
import SellersBoard from "./pages/sellersBoard"
import SellersStore from "./pages/sellersStore"
import Prelaunch from "./pages/Prelaunch"
import Checkout from "./pages/Checkout"
import Errorpage from "./pages/Errorpage"
import Buyeraccount from "./pages/Buyeraccount"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="prelaunch" element={<Prelaunch />} />
        <Route path="product-details" element={<ProductDetails />} />
        <Route path="sellers-board" element={<SellersBoard />} />
        <Route path="sellers-store" element={<SellersStore />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="errorpage" element={<Errorpage />} />
        <Route path="buyeraccount" element={<Buyeraccount />} />
      </Routes>
    </BrowserRouter>
  )
}
