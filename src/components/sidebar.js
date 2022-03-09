import React from "react"
import {
  FiHome,
  FiCircle,
  FiShoppingCart,
  FiBox,
  FiGrid,
  FiCalendar,
  FiCreditCard,
  FiUser,
  FiHelpCircle,
} from "react-icons/fi"
import { Link } from "react-router-dom"

const Sidebar = ({ showSidebar, page }) => {
  const currentPage =
    "bg-primary text-white cursor-pointer py-0.5 px-2 flex items-center w-full border-none rounded-full"
  const regularPage =
    "cursor-pointer py-0.5 px-2 flex items-center w-full hover:bg-primary hover:text-white hover:border-none hover:rounded-full"
  const LinkReset = "p-0 font-light"

  return (
    <div
      className={`lg:w-auto lg:relative lg:translate-x-0 lg:col-span-1 w-64 absolute inset-y-0 left-0 transform transition duration-200 ease-in-out flex flex-col bg-cover bg-drawer text-primary text-sm font-light px-4 py-8 space-y-8 z-10 ${
        showSidebar
          ? "translate-x-0 shadow-lg"
          : "-translate-x-full shadow-none"
      }`}
    >
      <div className="flex justify-between items-center">
        <Link to="/">
          <img
            src={require("../assets/BAMZI.png")}
            alt="bamzi"
            className="w-16"
          />
        </Link>
        <img
          src={require("../assets/avatar-1.jpg")}
          alt="avatar"
          className="w-8 rounded-full lg:hidden"
        />
      </div>
      <span className="lg:hidden text-sm text-primary px-2">
        Evans Bex Electronics Store
      </span>

      <div className="flex flex-col space-y-2">
        <Link to="/sellers" className={LinkReset}>
          <span className={page === "dashboard" ? currentPage : regularPage}>
            <FiHome className="mr-4" /> Dashboard
          </span>
        </Link>

        <span className={regularPage}>
          <FiCircle className="mr-4" /> Analytics
        </span>

        <Link to="/marketing" className={LinkReset}>
          <span className={page === "marketing" ? currentPage : regularPage}>
            <FiCircle className="mr-4" /> Marketing
          </span>
        </Link>
      </div>

      <div className="flex flex-col space-y-2">
        <h3 className="font-semibold">PRODUCTS</h3>

        <Link to="/sales-page" className={LinkReset}>
          <span className={page === "sales-page" ? currentPage : regularPage}>
            <FiShoppingCart className="mr-2" /> Sales
          </span>
        </Link>

        <Link to="/sellers-board" className={LinkReset}>
          <span
            className={page === "sellers-board" ? currentPage : regularPage}
          >
            <FiBox className="mr-2" /> All Products
          </span>
        </Link>

        <span className={regularPage}>
          <FiGrid className="mr-2" /> Categories
        </span>
      </div>

      <div className="flex flex-col space-y-2">
        <h3 className="font-semibold">TRANSACTIONS</h3>

        <Link to="/sales-history" className={LinkReset}>
          <span
            className={page === "sales-history" ? currentPage : regularPage}
          >
            <FiCalendar className="mr-2" /> History
          </span>
        </Link>

        <span className={regularPage}>
          <FiCreditCard className="mr-2" /> Billings
        </span>
      </div>

      <div className="flex flex-col space-y-2">
        <h3 className="font-semibold">SETTINGS</h3>

        <span className={regularPage}>
          <FiUser className="mr-2" /> Account
        </span>

        <Link to="/customise-shop" className={LinkReset}>
          <span
            className={page === "customise-shop" ? currentPage : regularPage}
          >
            <FiBox className="mr-2" /> Customize Shop
          </span>
        </Link>

        <span className={regularPage}>
          <FiHelpCircle className="mr-2" /> Help
        </span>
      </div>
    </div>
  )
}

export default Sidebar
