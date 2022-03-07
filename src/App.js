import React from 'react'
import ProductDetails from "./pages/productDetails"
import SellersBoard from "./pages/sellersBoard"
import SellersStore from "./pages/sellersStore"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ShoppingCart from "./pages/ShoppingCart"
import WishList from "./pages/WishList"
import ResetPassword from "./pages/resetPassword"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product-details" element={<ProductDetails />} />
        <Route path="sellers-board" element={<SellersBoard />} />
        <Route path="sellers-store" element={<SellersStore />} />
        <Route path="Home-Page" element={<HomePage />} />
        <Route path="Shopping-Cart" element={<ShoppingCart />} />
        <Route path="Wish-List" element={<WishList />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  )
}
