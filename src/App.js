import React from 'react'
import ProductDetails from "./pages/productDetails"
import SellersBoard from "./pages/sellersBoard"
import SellersStore from "./pages/sellersStore"
import Orders from "./pages/Orders"
import SalesPage from "./pages/SalesPage"
import CustomiseShop from "./pages/CustomiseShop"
import Prelaunch from "./pages/Prelaunch"
import Checkout from "./pages/Checkout"
import Errorpage from "./pages/Errorpage"
import Buyeraccount from "./pages/Buyeraccount"
import SalesPage from "./pages/SalesPage"
import Marketing from "./pages/marketing"
import Sellers from "./pages/Sellers"
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
        <Route path="sales-page" element={<SalesPage />} />
        <Route path="customise-shop" element={<CustomiseShop />} />
        <Route path="orders" element={<Orders />} />
        <Route path="prelaunch" element={<Prelaunch />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="errorpage" element={<Errorpage />} />
        <Route path="buyeraccount" element={<Buyeraccount />} />
        <Route path="sales-page" element={<SalesPage />} />
        <Route path="marketing" element={<Marketing />} />
        <Route path="sellers" element={<Sellers />} />
      </Routes>
    </BrowserRouter>
  )
}
