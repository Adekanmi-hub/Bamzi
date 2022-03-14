import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductDetails from "./pages/productDetails"
import SellersBoard from "./pages/sellersBoard"
import SellersStore from "./pages/sellersStore"
import Orders from "./pages/Orders"
import SaleHistory from "./pages/SaleHistory"
import SalesPage from "./pages/SalesPage"
import CustomiseShop from "./pages/CustomiseShop"
import Prelaunch from "./pages/Prelaunch"
import Checkout from "./pages/Checkout"
import Errorpage from "./pages/Errorpage"
import Buyeraccount from "./pages/Buyeraccount"
import Marketing from "./pages/marketing"
import Sellers from "./pages/Sellers"
import HomePage from "./pages/HomePage"
import ShoppingCart from "./pages/ShoppingCart"
import WishList from "./pages/WishList"
import ResetPassword from "./pages/resetPassword"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import ForgotPassword from "./pages/ForgotPassword"
import SellersDashboard from "./pages/SellersDashboard"
import Shippinginfo from "./pages/Shippinginfo"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/sellers-board" element={<SellersBoard />} />
        <Route path="/sellers-store" element={<SellersStore />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/sales-page" element={<SalesPage />} />
        <Route path="/customise-shop" element={<CustomiseShop />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/prelaunch" element={<Prelaunch />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/my-account" element={<Buyeraccount />} />
        <Route path="/sales-history" element={<SaleHistory />} />
        <Route path="/sales-page" element={<SalesPage />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<SellersDashboard />} />
        <Route path="/shippinginfo" element={<Shippinginfo />} />
        <Route path="/*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  )
}
