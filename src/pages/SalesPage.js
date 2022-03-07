import React, { useState } from "react"

import Sidebar from "../components/sidebar"
import SellersHeader from "../components/SellersHeader"
import { salesData } from "../utils/data"
import SalesItem from "../components/SalesItem"

import {
  FaTruck,
  FaQuestionCircle,
  FaChevronDown,
  FaCalendarAlt,
} from "react-icons/fa"
import { FiGrid, FiSearch } from "react-icons/fi"

export default function SalesPage() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="font-poppins lg:grid lg:grid-cols-6  min-h-screen relative">
      <Sidebar showSidebar={showSidebar} page="sales-page" />

      <div className="col-span-5 bg-gray-100 px-6 py-3 lg:px-16 sm:py-8">
        <SellersHeader
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />

        <div className="flex lg:flex-row flex-col mt-8 w-full">
          <div className="xl:w-1/2 lg:w-2/5 w-full pr-4">
            <span className="flex space-x-3 items-center">
              <FaTruck size={32} className="text-primary" />
              <p className="text-primary text-lg font-semibold">
                Sales and Order
              </p>
              <p className="text-blue-500 text-sm underline">
                View Sales History
              </p>
            </span>

            <form action="" className="w-full sm:w-3/4 mt-4">
              <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                <input
                  type="text"
                  name="search"
                  placeholder="Search anything"
                  autoComplete="off"
                  aria-label="Search anything"
                  className="w-full py-2 px-4 placeholder:text-gray-400 lg:text-sm text-xs text-black border-none rounded-2xl ring-2 ring-gray-200 focus:ring-gray-500 focus:ring-2"
                />
                <FiSearch className="lg:w-5 lg:h-5 w-4 h-4 absolute right-4" />
              </div>
            </form>

            <p className="text-gray-600 text-sm mt-4 italic">
              You can check list goods that as been delivered to your customers
              and once a good has been delivered set the order to delivered
            </p>
          </div>

          <div className="xl:w-1/2 lg:w-3/5 w-full lg:mt-0 mt-4 flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 sm:items-center items-start lg:justify-end justify-start">
            <div className="flex space-x-4">
              <div className="pt-6 pr-8 pb-4 pl-4 text-white bg-red-500 rounded-xl relative">
                <FaQuestionCircle
                  size={12}
                  className=" absolute top-2 right-2"
                />
                <p className="text-xs">Bad goods</p>
                <p className="text-xl">28 errors</p>
              </div>
              <div className="pt-6 pr-8 pb-4 pl-4 text-white bg-primary rounded-xl relative">
                <FaQuestionCircle
                  size={12}
                  className="absolute top-2 right-2"
                />
                <p className="text-xs">Pending Sales </p>
                <p className="text-xl">120</p>
              </div>
            </div>

            <div className="flex space-x-2 sm:-mt-8 items-start">
              <span className="flex items-center space-x-8 p-2 bg-white rounded-md border-none shadow text-sm">
                <p>Filter</p> <FaChevronDown />
              </span>
              <span className="p-2 bg-white rounded-md border-none shadow">
                <FiGrid />
              </span>
              <span className="p-2 bg-white rounded-md border-none shadow">
                <FaCalendarAlt />
              </span>
            </div>
          </div>
        </div>

        <div className="w-full mt-16">
          <div className="bg-primary text-white py-2 px-4 w-full flex items-center">
            <span className="lg:w-4/12 w-5/12 text-center">Product Name</span>
            <span className="xl:w-1/12 w-2/12 text-center hidden sm:block">
              Options
            </span>
            <span className="w-2/12 text-center hidden sm:block">
              Shipping Address
            </span>
            <span className="md:w-1/12 w-1/6 text-center">QTY</span>
            <span className="md:w-1/12 w-1/6 text-center">Price</span>
            <span className="md:w-1/12 w-3/12 text-center">Status</span>
            <span className="w-2/12 text-center hidden xl:block">Date</span>
          </div>

          <div className="w-full bg-white">
            {salesData.map(item => (
              <div key={item._id}>
                <SalesItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
