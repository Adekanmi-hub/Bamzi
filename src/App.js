import React from "react"
import ProductDetails from "./pages/productDetails"
import SellersBoard from "./pages/sellersBoard"
import SellersStore from "./pages/sellersStore"
import SalesPage from "./pages/SalesPage"
import Marketing from "./pages/marketing"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductDetails />} />
        <Route path="product-details" element={<ProductDetails />} />
        <Route path="sellers-board" element={<SellersBoard />} />
        <Route path="sellers-store" element={<SellersStore />} />
        <Route path="sales-page" element={<SalesPage />} />
        <Route path="marketing" element={<Marketing />} />
      </Routes>
    </BrowserRouter>
  )
}
