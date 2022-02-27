import React from "react"
import SaleHistory from "./pages/SaleHistory"
import SalesPage from "./pages/SalesPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>   
        <Route path="sale-History" element={<SaleHistory />} />
        <Route path="sales-page" element={<SalesPage />} />
      </Routes>
    </BrowserRouter>
  )
}
