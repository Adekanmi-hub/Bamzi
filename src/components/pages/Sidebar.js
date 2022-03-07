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

const Sidebar = ({ showSidebar }) => {
  return (
    <div
      className={`lg:w-auto lg:relative lg:translate-x-0 lg:col-span-1 lg:text-white lg:bg-none w-64 absolute inset-y-0 left-0 transform transition duration-200 ease-in-out flex flex-col bg-contain bg-drawer bg-fixed text-black  text-sm font-light px-4 py-8 space-y-8 ${
        showSidebar
          ? "translate-x-0 z-10 shadow-lg"
          : "-translate-x-full z-0 shadow-none"
      }`}
    >
      <div className="flex justify-between items-center">
        <img
          src={require("../../assets/BAMZI.png")}
          alt="bamzi"
          className="w-16"
        />
        <img
          src={require("../../assets/avatar-1.jpg")}
          alt="avatar"
          className="w-8 rounded-full lg:hidden"
        />
      </div>
      <span className="lg:hidden text-sm text-primary px-2">
        Evans Bex Electronics Store
      </span>

      <div className="flex flex-col space-y-2">
        <span className="cursor-pointer hover:bg-gray-100 w-full py-0.5 px-2 hover:border-none hover:rounded-full hover:text-black flex items-center">
          <FiHome className="mr-4" /> Dashboard
        </span>
        <span className="cursor-pointer py-0.5 px-2 flex items-center w-full hover:bg-gray-100 hover:text-black hover:border-none hover:rounded-full">
          <FiCircle className="mr-4" /> Analytics
        </span>
        <span className="cursor-pointer py-0.5 px-2 flex items-center w-full hover:bg-gray-100 hover:text-black hover:border-none hover:rounded-full">
          <FiCircle className="mr-4" /> eCommerce
        </span>
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="font-semibold">PRODUCTS</h3>
        <span className="cursor-pointer py-0.5 px-2 flex items-center">
          <FiShoppingCart className="mr-2" /> Sales
        </span>
        <span className="cursor-pointer lg:bg-secondary lg:text-black bg-primary text-white w-full border-none rounded-full py-0.5 px-2 flex items-center">
          <FiBox className="mr-2" />
          All Products
        </span>
        <span className="cursor-pointer py-0.5 px-2 flex items-center">
          <FiGrid className="mr-2" />
          Categories
        </span>
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="font-semibold">TRANSACTIONS</h3>
        <span className="cursor-pointer py-0.5 px-2 flex items-center">
          <FiCalendar className="mr-2" /> History
        </span>
        <span className="cursor-pointer py-0.5 px-2 flex items-center">
          <FiCreditCard className="mr-2" /> Billings
        </span>
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="font-semibold">SETTINGS</h3>
        <span className="cursor-pointer py-0.5 px-2 flex items-center">
          <FiUser className="mr-2" /> Account
        </span>
        <span className="cursor-pointer py-0.5 px-2 flex items-center">
          <FiBox className="mr-2" />
          Customize Shop
        </span>
        <span className="cursor-pointer py-0.5 px-2 flex items-center">
          <FiHelpCircle className="mr-2" /> Help
        </span>
      </div>
    </div>
  )
}

export default Sidebar
