import React from "react"
import ProductDetails from "./pages/productDetails"
import SellersBoard from "./pages/sellersBoard"
import SellersStore from "./pages/sellersStore"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ResetPassword from "./pages/resetPassword"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<ProductDetails />} />
          <Route path="product-details" element={<ProductDetails />} />
          <Route path="sellers-board" element={<SellersBoard />} />
          <Route path="sellers-store" element={<SellersStore />} />
          <Route path="reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  )
}
